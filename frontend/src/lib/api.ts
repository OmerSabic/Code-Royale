import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:8080',
})

api
    .get('/repos/skellock/apisauce/commits')
    .then(response => response.data[0].commit.message)
    .then(console.log)      


api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } })

interface AuthRequest {
    username: string;
    password: string;
}

interface AuthResponse {
    success: boolean;
    session_id?: string;
    code?: string;
}

export async function authenticate(username: string, password: string, type: 'signup' | 'login'): Promise<string> {

    const url1 = '/v1/auth/signup';
    const url2 = '/v1/auth/login';
    const body: AuthRequest = {
        username,
        password
    };
    const response = await api.post<AuthResponse>(type == 'signup'?url1:url2, body);
    if (response.data) {
        if (!response.data.success && !response.data.session_id) {
            if (response.data.code == 'invalid_auth') {
                throw new Error('Invalid username or password');
            }
            else if (response.data.code == 'username_taken') {
                throw new Error('Username already taken');
            }
            else if (response.data.code == 'cannot_create_account') {
                throw new Error('Cannot create account');
            }
        }
        return response.data.session_id;
    }
    throw new Error('Error authenticating');
}

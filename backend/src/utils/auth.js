import {hash, compare} from 'bcrypt';
import { db } from '../db';
import { sessions } from '../db/schemas';

export const hashPassword = async (password) => {
    return await hash(password, 10);
}

export const comparePasswords = async (password1, password2) => {
    return await compare(password1, password2);
}

export const createSession = async (user_id) => {
    const [session] = await db.insert(sessions).values({
        user_id
    }).returning({
        id: sessions.id
    });

    return session.id;
}
import {hash, compare} from 'bcrypt';
import { db } from '../db';
import { sessions } from '../db/schemas';

export const hashPassword = async (password) => {
    return await hash(password, 10);
}

export const comparePasswords = async (plain_password, hashed_password) => {
    return await compare(plain_password, hashed_password);
}

export const createSession = async (user_id) => {
    const [session] = await db.insert(sessions).values({
        user_id
    }).returning({
        id: sessions.id
    });

    return session.id;
}
/** @typedef {import("fastify").FastifyInstance} FastifyInstance */

import { eq } from "drizzle-orm";
import { users } from "../db/schemas";
import { comparePasswords, createSession, hashPassword } from "../utils/auth";

/**
 * 
 * @param {FastifyInstance} fastify 
 * @param {unknown} _ 
 * @param {() => void} done 
 */
export const authRoutes = (fastify, _, done) => {
    fastify.post("/login", {
        schema: {
            body: {
                type: "object",
                properties: {
                    username: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                },
                required: ["username", "password"]
            },
        }
    }, async (request, response) => {
        const [user] = await request.db.select().from(users).where(eq(request.body.username, users.username));

        if(!user) return response.status(400).send({
            success: false,
            code: "invalid_auth"
        });

        if(!(await comparePasswords(user.password, request.body.password))) {
            return response.status(400).send({
                success: false,
                code: "invalid_auth"
            });
        }

        const session_id = await createSession(user.id);

        return response.send({
            success: true,
            session_id
        });
    });

    fastify.post("/signup", {
        schema: {
            body: {
                type: "object",
                properties: {
                    username: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                },
                required: ["username", "password"]
            },
        }
    }, async (request, response) => {
        const [user] = await request.db.insert(users).values({
            username: request.body.username,
            password: (await hashPassword(request.body.password))
        }).returning({
            id: users.id
        });

        if(!user) return response.status(400).send({
            success: false,
            code: "cannot_create_account"
        });

        const session_id = await createSession(user.id);

        return response.send({
            success: true,
            session_id
        });
    });

    done();
};

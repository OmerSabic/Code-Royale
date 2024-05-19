/** @typedef {import("fastify").FastifyInstance} FastifyInstance */
import fp from "fastify-plugin";
import { db } from "../db/index.js";
import { sessions, users } from "../db/schemas.js";
import { eq } from "drizzle-orm";

export const middleware = fp(
  /**
   * @param {FastifyInstance} fastify 
   * @param {unknown} _options 
   */
  async (fastify, _options) => {
  fastify.addHook("onValidation", fn);
});

/**
 * 
 * @param {import("fastify").FastifyRequest} request
 */
export const fn = async (request) => {
    if(request.cookies.session_token) {
      const [user] = await request.db.select({
        id: users.id,
        username: users.username,
        created_at: users.created_at,
        session_id: sessions.id
      }).from(users).leftJoin(sessions, eq(sessions.user_id, users.id)).where(eq(sessions.id, request.cookies.session_token));

      if(user) request.session = user;
    }
}
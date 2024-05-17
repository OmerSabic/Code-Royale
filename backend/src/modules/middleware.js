/** @typedef {import("fastify").FastifyInstance} FastifyInstance */
import fp from "fastify-plugin";
import { Redis } from "../utils/index.js";
import { db } from "../db/index.js";

const middleware = fp(
  /**
   * @param {FastifyInstance} fastify 
   * @param {unknown} _options 
   */
  async (fastify, _options) => {
  fastify.addHook("onRequest", async (request) => {
    request.redis = Redis;
    request.db = db;
  });
});

export { middleware };

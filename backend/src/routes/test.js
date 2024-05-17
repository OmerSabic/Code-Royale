/** @typedef {import("fastify").FastifyInstance} FastifyInstance */

/**
 * 
 * @param {FastifyInstance} fastify 
 * @param {unknown} _ 
 * @param {() => void} done 
 */
export const testRoutes = (fastify, _, done) => {
  fastify.get("/", async (request, response) => {
    const visits = Number(await request.redis.get("visits"));

    request.redis.incr("visits");
    response.send({
      hello: "world",
      visits,
    });
  });

  done();
};

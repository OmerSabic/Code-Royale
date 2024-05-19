import { initDb } from "./db/index.js";
import { authRoutes, testRoutes } from "./routes/index.js";
import { env, Logger, Redis } from "./utils/index.js";
import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import { middleware } from "./modules/middleware.js";
const API_VERSION = "v1";

export const main = async () => {
  const server = fastify({
    bodyLimit: 1_000_000,
    trustProxy: true,
  });

  await initDb();
  // await Redis.initialize();

  server.register(fastifyCookie, {
    secret: "my-secret", // for cookies signature
    hook: 'preParsing', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {},  // options for parsing cookies
  });
  server.register(middleware);
  server.register(import("@fastify/cors"), {
    maxAge: 600,
    origin: true,
    credentials: true,
  });

  // Routes
  server.register(testRoutes, {
    prefix: `/${API_VERSION}/test`,
  });

  server.register(authRoutes, {
    prefix: `/${API_VERSION}/auth`,
  });


  server.listen({ host: env.HOST, port: env.PORT }, (error, address) => {
    if (error) {
      Logger.error("INIT", error.message);
      throw new Error(error.message);
    }

    Logger.info("INIT", `Server listening at ${address}`);
  });

  return server;
};

main();

import type { db } from "./db";
// import type { Redis } from "./utils";

declare module "fastify" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface FastifyRequest {
    db: typeof db;
    cookies: any;
    session: {
      id: string,
      username: string,
      created_at: Date,
      session_id: string
    };
  }
}

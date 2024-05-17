import * as redis from "redis";
import { env, Logger } from "./index.js";

/** @typedef {"session" | "visits"} RedisPrefixes */
/** @typedef {`${RedisPrefixes}:${string | number}` | RedisPrefixes} RedisKey */

class Redis {
  /** 
   * @type {ReturnType<typeof redis.createClient>} 
   * @public 
   */
  static redis;

  /** @public */
  static async initialize() {
    this.redis = redis.createClient({
      url: env.REDIS_URL,
    });

    this.redis.on("error", (error) => {
      Logger.error("INIT", "Failed to connect to redis " + String(error));
      throw new Error("Failed to connect to redis");
    });

    this.redis.on("connect", () => {
      Logger.info("INIT", "Connected to redis");
    });

    await this.redis.connect();
  }

  /**
   * @param {RedisKey} key Key of the value to set
   * @param {string} value Value to set
   * @param {?redis.SetOptions} options Options for the value to set
   * @public
   * 
   * @example
   * await Redis.set("session:user_xxx", new Date().toISOString());
   * await Redis.set("visits", "1");
   */
  static async set(key, value, options) {
    await this.redis.set(key, value, options);
  }

  /**
   * 
   * @param {RedisKey} key 
   * @public
   */
  static async incr(key) {
    await this.redis.incr(key);
  }

  /**
   * 
   * @param {RedisKey} key 
   * @public
   */
  static async decr(key) {
    await this.redis.decr(key);
  }

  /**
   * @template T
   * 
   * @param {RedisKey} key Key of the value to get
   * @example
   * const value = await Redis.get("session:user_xxx");
   * const visits = await Redis.get("visits");
   * 
   * @returns {T | undefined}
   */
  static async get(key) {
    return this.redis.get(key);
  }

  /**
   *
   * @param {RedisKey} key Key of the value to delete
   * @public
   * @example
   * await Redis.del("session:user_xxx");
   * await Redis.del("visits");
   */
  static async del(key) {
    await this.redis.del(key);
  }
}

export { Redis };

import { json, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// export const modesEnum = pgEnum("modes", ["fastest", "shortest", "reverse"]);
export const modesEnum = pgEnum("modes", ["fastest"]);
export const difficultyEnum = pgEnum("difficulties", ["easy", "medium", "hard"]);
export const statusEnum = pgEnum("statuses", ["submitted", "testing", "completed"]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: text("username").notNull().unique(),
  hash_password: text("password", { length: 256 }).notNull(),
  created_at: timestamp("created_at").defaultNow()
});

export const problems = pgTable("problems", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  tests: json("tests").array(),
  difficulty: difficultyEnum("difficulty").notNull()
})

export const matches = pgTable("match", {
  id: uuid("id").defaultRandom().primaryKey(),
  modes: modesEnum("modes").array().notNull(),
  problem_id: uuid("problem_id").references(() => problems.id),
  players: uuid("players").references(() => users.id).array()
});

export const submissions = pgTable("submission", {
  id: uuid("id").defaultRandom().primaryKey(),
  match_id: uuid("match_id").references(() => matches.id).notNull(),
  user_id: uuid("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  status: statusEnum("status").notNull().default("submitted"),
})




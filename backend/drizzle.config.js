import * as dotenv from 'dotenv'
dotenv.config()


export default {
  "out": "./src/db/migrations",
  "schema": "./src/db/schemas.js",
  "driver": "pg",
  "dbCredentials": {
    "connectionString": process.env.DATABASE_URL
  }
}
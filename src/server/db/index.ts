import type { NeonQueryFunction } from "@neondatabase/serverless";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  sql: NeonQueryFunction<false, false> | undefined;
};

const sql = globalForDb.sql ?? neon(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalForDb.sql = sql;

export const db = drizzle(sql, { schema });

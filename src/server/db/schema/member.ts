import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";
import { communityTable } from "./community";
import { userTable } from "./user";

export const roleEnum = pgEnum("role", ["admin", "member", "mod"]);

export const memberTable = pgTable("member", {
  ...defaultTableCols,
  role: roleEnum("role").notNull(),
  community_id: uuid("community_id")
    .references(() => communityTable.id)
    .notNull(),
  user_id: uuid("user_id")
    .references(() => userTable.id)
    .notNull(),
});

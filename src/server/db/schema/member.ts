import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";
import { communityTable } from "./community";

export const roleEnum = pgEnum("role", ["admin", "member", "mod"]);

export const memberTable = pgTable("member", {
	...defaultTableCols,
	role: roleEnum("role").notNull(),
	community_id: uuid("community_id")
		.references(() => communityTable.id)
		.notNull(),
});

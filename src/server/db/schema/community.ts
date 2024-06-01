import { pgTable, text } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";

export const communityTable = pgTable("community", {
	...defaultTableCols,
	name: text("name").notNull(),
	description: text("description").notNull(),
});

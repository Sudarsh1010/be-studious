import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";
import { communityTable } from "./community";

export const subjectTable = pgTable("subject", {
	...defaultTableCols,
	name: text("name").notNull(),
	description: text("description").notNull(),
	community_id: uuid("community_id")
		.references(() => communityTable.id)
		.notNull(),
});

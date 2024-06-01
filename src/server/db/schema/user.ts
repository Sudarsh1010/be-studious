import { pgTable, text } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";

export const userTable = pgTable("user", {
	...defaultTableCols,
	first_name: text("first_name").notNull(),
	last_name: text("last_name"),
	email: text("email").notNull(),
	clerk_user_id: text("clerk_user_id").unique().notNull(),
});

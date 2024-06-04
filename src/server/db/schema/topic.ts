import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";
import { unitTable } from "./unit";

export const topicTable = pgTable("topic", {
  ...defaultTableCols,
  name: text("name").notNull(),
  description: text("description").notNull(),
  serial_no: integer("serial_no").notNull(), // unique per unit
  unit_id: uuid("unit_id")
    .references(() => unitTable.id)
    .notNull(),
});

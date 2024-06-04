import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { defaultTableCols } from "../default-table-cols";
import { subjectTable } from "./subject";

export const unitTable = pgTable("unit", {
  ...defaultTableCols,
  name: text("name").notNull(),
  description: text("description").notNull(),
  serial_no: integer("serial_no").notNull(), // unique per subject
  subject_id: uuid("subject_id")
    .references(() => subjectTable.id)
    .notNull(),
});

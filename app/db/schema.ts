import { pgTable, text , uuid} from 'drizzle-orm/pg-core';
// import { createInsertSchema } from 'drizzle-zod';

export const projects = pgTable("projects", {
    id: uuid('id').primaryKey().defaultRandom(), // Add this line
    user_id: text('user_id').notNull(),
    name : text("name").notNull(),
    project_type : text("project_type").notNull(),
    description : text("description").notNull(),
    imageUrls : text("imageUrls").array().notNull(), //not null for now but we can add logic for editing later.
})

import { pgTable, text, integer } from 'drizzle-orm/pg-core';
// import { createInsertSchema } from 'drizzle-zod';

export const projects = pgTable("projects", {
    user_id: text('user_id').primaryKey().notNull(),
    name : text("name").notNull(),
    project_type : text("project_type").notNull(),
    description : text("description").notNull(),
    imageUrls : text("imageUrls").array().notNull(), //not null for now but we can add logic for editing later.
})

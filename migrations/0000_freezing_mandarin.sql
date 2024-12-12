CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"project_type" text NOT NULL,
	"description" text NOT NULL,
	"imageUrls" text[] NOT NULL,
	CONSTRAINT "projects_user_id_unique" UNIQUE("user_id")
);

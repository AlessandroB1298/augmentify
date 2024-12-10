CREATE TABLE IF NOT EXISTS "projects" (
	"user_id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"project_type" text NOT NULL,
	"description" text NOT NULL,
	"imageUrls" text[] NOT NULL
);

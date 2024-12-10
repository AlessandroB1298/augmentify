import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

const dataUrl = process.env.DATABASE_URL!;
if(!dataUrl) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: dataUrl,
  },
});

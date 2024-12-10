
import { drizzle } from 'drizzle-orm/neon-http';
const dbUrl = process.env.DATABASE_URL;
if(!dbUrl){
    throw new Error("Database URL is not set or isn't in the .env.local file")
}
export const db = drizzle(dbUrl);

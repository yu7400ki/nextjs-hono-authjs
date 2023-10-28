import { drizzle } from "drizzle-orm/d1";

const db = drizzle(process.env.DB);

export default db;

# PostgresSQL-staging
for testing purpose

## drizzle package

npm install drizzle-orm
npm i -D @types/pg
npm i -D drizzle-kit
npm install @vercel/postgres
	
vercel
		
vercel link 
				
vercel env pull .env.development.local

import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todoTable = pgTable("todo", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: varchar("description"),
  status: boolean("status").default(true).notNull(),
});

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type

export const db = drizzle(sql);


git remote add origin https://github.com/Musaib70/postgresql-staging.git
git branch -M main
git push -u origin main

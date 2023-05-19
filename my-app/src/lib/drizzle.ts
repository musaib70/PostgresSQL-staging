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
import { unique } from "next/dist/build/utils";
import { table } from "console";
  
  export const todoTable = pgTable("todo", {
    id: serial("id").primaryKey().notNull(),
    task: varchar("task", {length:50}).notNull(),
    description: varchar("description", {length: 500}),
    
  });
  


  export type Todo = InferModel<typeof todoTable>;
  export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type
  
  export const db = drizzle(sql);
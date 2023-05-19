import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/lib/drizzle";
import { Message } from "postcss";

export async function POST (request: NextRequest) {
    
    const res = await request.json()

    try {
        
        if (res) {
        
        const data = await db.insert(todoTable).values(res).returning();

        return new NextResponse (JSON.stringify({message: "Your data bas been added into database"}))
        }

    } catch (error) {
        console.log((error as {message:string}).message);
        
    }
}

export async function GET (request: NextRequest) {
    
    try {

        const res = db.select().from(todoTable)

        return new NextResponse(JSON.stringify(res))
        
    } catch (error) {

        console.log((error as {message:string}).message);
        
    }
}
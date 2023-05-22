import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/lib/drizzle";
import { Message } from "postcss";
import { json } from "stream/consumers";


export async function POST (request: NextRequest) {
    
    const res = await request.json()

    try {
        
        if (res) {
        
        const data = await db.insert(todoTable).values(res).returning();

        return new NextResponse (JSON.stringify({message: "Your data bas been added into database"}))
        }

        else {
            throw new Error("Task field is required");
            
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

// export async function DELETE (request:NextRequest) {
    
//      const req = await request.json()

//     try {
//         if (req.id) {
//             const data = (await db.delete(todoTable).where(req.id).returning())

//             return new NextResponse (JSON.stringify({message:`Your Task ${req.id} has been deleted`}))
//         } else {
//             throw new Error("Failed!!! Try Again");
            
//         }
//     } catch (error) {
//         console.log((error as {message:string}).message);
        
//     }
// }
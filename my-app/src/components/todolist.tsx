import { Todo } from "@/lib/drizzle";

const getData = async () => {
    try {
        const res = await fetch("http://127.0.0.1:3000/api/todo", {
            method: "GET",
            cache:"no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the data")
        };
        const result = await res.json()
        return result
    } catch (err) {
        console.log(err)
    }
}

const TodoList = async () => {

    const res: Todo[]  = await getData();


    return (

        <div className="max-h-[350px] overflow-auto mb-4 ">
            {
                res.map((item) => {
                    return (
                        <div className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5">
                            {/* Circle */}
                            <div className="h-3 w-3 bg-secondary rounded-full"></div>
                            {/* Task Title */}
                            <p className="text-lg font-medium">{item.task}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList














// import { GET } from '@/app/api/todo/route'
// import { Todo } from '@/lib/drizzle';
// import React from 'react'


// async function api () {
    
//     try {
//         const data = await fetch ("http://127.0.0.1:3000/api/todo",{
//             method: "GET",
//             cache: "no-store",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })

//         if (!data.ok){
//             throw new Error("Your request has been failed");
//         }

//         const res = await data.json()
//         return res;

//     } catch (error) {
//         console.log(error);
        
//     }
// }



// const TodoList = async () => {

//     const a: Todo[] = await api()

//   return (
//     <div className="max-h-[350px] overflow-auto mb-4 ">
//     {
        
//      a.map((item) => {

//     return(
      
//    <div className='bg-white rounded-lg w-full max-w-md px-3 py-3 text-gray-700 flex justify-start gap-2 items-center'>
//      <span className=' rounded-full bg-secondary h-3 w-3 '></span>
//       <p className='text-slate-800 font-medium'> {item.task} </p>
//     </div> 
        
      
//     )
// })

//     }
// </div>
//   )
// }

// export default TodoList



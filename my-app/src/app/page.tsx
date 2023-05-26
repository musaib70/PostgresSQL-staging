import Image from 'next/image'
import  TodoList  from "@/components/todolist";
import AddTodoList from '@/components/AddTodoList';

export default function Home() {
  return (
 
<div className='bg-gradient-to-tr to-primary from-secondary h-screen flex justify-center items-center '>
  
  <div className='bg-gradient-to-tr from-slate-400 to-slate-600 rounded-xl w-full max-w-md px-8 py-8 space-y-4 '>

     {/* @ts-ignore */}

   <TodoList />


    <AddTodoList/>

  <div className='rounded-full bg-slate-800 h-1.5 w-1/2  mx-auto '></div>

  
  </div>


    </div>    

  )
}

  {/* <div className='flex justify-center'>
  <div className='rounded-full bg-slate-100  pl-4 py-2 w-1/2 text-[#7A7A7A] '> <button> write a new task </button></div>
  <div className='divide-y-4 divide-slate-950'></div>
   */}

  {/* </div> */}
"use client"
import Link from 'next/link'


export  function CreateNewProject(){
    return(
        <Link href="/dashboard/projects/create" className={"bg-pink-400 text-white hover:bg-pink-600 rounded-lg px-5 py-2.5 mr-2.5"}>Add New</Link>
    )
}
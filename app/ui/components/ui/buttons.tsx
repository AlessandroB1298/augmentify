import Link from 'next/link'


export  function CreateNewProject(){
    return(
        <Link href="/dashboard/projects/create" className={"bg-pink-400 text-white hover:bg-pink-600 rounded-xl px-5 py-2.5 mr-2.5"}>Add New</Link>
    )
}

type projectIdParams = {
    id : string
}
export  function Augment({id} : projectIdParams){
    return(
        <Link href={`/dashboard/augmentation/${id}`} className={"bg-pink-400 text-white hover:bg-pink-600 rounded-xl px-5 py-2.5 mr-2.5"}>Augment</Link>
    )
}
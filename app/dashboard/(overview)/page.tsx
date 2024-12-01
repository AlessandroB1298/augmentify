import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
export default function Page(){
    const user = auth()
    if(!user){
        redirect(`/sign-up`)
    }
    return(
        <div className={"flex justify-center items-center min-h-screen sm:justify-left"}>
            <h2 className={"text-white text-[64px] font-solid "}>Welcome to the Home Page</h2>
        </div>
    )
}
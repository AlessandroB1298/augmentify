import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import LottieAnimation from "@/app/ui/components/lottieAnimation"
export default function Page(){
    const user = auth()
    if(!user){
        redirect(`/sign-up`)
    }
    return(
        <div className={"flex justify-center items-center min-h-screen sm:justify-left font-bold font-bebas"}>
            <h2 className={"text-white text-[64px] font-solid "}>Welcome to Augmentify</h2>
            <LottieAnimation/>
        </div>
    )
}
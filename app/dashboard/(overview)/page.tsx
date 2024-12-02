import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import LottieAnimation from "@/app/ui/components/lottieAnimation"
import { Suspense } from 'react';

export default function Page(){
    const user = auth()
    if(!user){
        redirect(`/sign-up`)
    }
    return(
        <div className={"flex justify-center items-center min-h-screen sm:justify-left font-bold"}>
            <h2 className={"text-white text-[64px] font-solid "}>Welcome to Augmentify</h2>
            {/*<LottieAnimation/>*/} {/*need to lazy load this animation*/}
            <Suspense>
                <LottieAnimation/>
            </Suspense>
        </div>
    )
}
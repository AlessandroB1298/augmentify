import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
export default function Page(){
    const user = auth()
    if(!user){
        redirect(`/sign-up`)
    }
    else{
        console.log(user)
    }
    return(
        <div>
            <h2>Welcome to the home page</h2>
        </div>
    )
}
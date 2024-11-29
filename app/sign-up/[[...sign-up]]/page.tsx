"use client"
import { SignUp } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";
import { useEffect } from 'react';

export default function SignUpPage() {
    const { isSignedIn, user } = useUser();
    const router = useRouter();

    // Redirect signed-in users
    useEffect(() => {
        if (isSignedIn) {
            // Redirect to dashboard or desired page after sign-up
            router.push('/dashboard');
        }
    }, [isSignedIn, router]);

    // If already signed in, don't show signup component
    if (isSignedIn) {
        return null;
    }
    if(user){
        console.log(user)
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                fallbackRedirectUrl="/dashboard"
            />
        </div>
    );
}
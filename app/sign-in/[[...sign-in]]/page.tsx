import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return(
    <div className="flex justify-center items-center min-h-screen">
        <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            forceRedirectUrl="/dashboard"  // Add this as well
            fallbackRedirectUrl="/dashboard"
        />
    </div>
    )
}
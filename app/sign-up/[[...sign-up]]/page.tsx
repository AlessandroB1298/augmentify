import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                forceRedirectUrl="/dashboard"  // Add this as well
                fallbackRedirectUrl="/dashboard"
            />
        </div>
    );
}
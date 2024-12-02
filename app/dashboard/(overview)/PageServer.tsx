// app/dashboard/(overview)/PageServer.tsx
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import GreetingComponent from "@/app/dashboard/(overview)/GreetingComponent";

export default async function PageServer() {
    const user = auth();

    if (!user) {
        redirect(`/sign-up`);
    }

    return (
        <div>
            {/* Pass the user data to the client component */}
            <GreetingComponent user={user} />
        </div>
    );
}

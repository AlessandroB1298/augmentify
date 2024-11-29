"use client"

import { usePathname } from 'next/navigation';
import {useUser} from "@clerk/nextjs";

export default function IsAuthenticated(){
    const { isSignedIn } = useUser();
    const pathname = usePathname();

    // Don't render if not signed in or on home page
    if (!isSignedIn || pathname === '/') {
        return null;
    }
}
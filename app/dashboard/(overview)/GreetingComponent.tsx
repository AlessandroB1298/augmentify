// app/dashboard/(overview)/ClientComponent.tsx

'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import('@/app/ui/components/lottieAnimation'), { ssr: false });

export default function ClientComponent() {
    return (
        <div className={"flex justify-center items-center min-h-screen sm:justify-left font-bold"}>
            <h2 className={"text-white text-[64px] font-solid "}>Welcome to Augmentify</h2>
            {/* Only show the animation if there's a user */}
            <Suspense fallback={<div>Loading...</div>}>
                <LottieAnimation />
            </Suspense>
        </div>
    );
}

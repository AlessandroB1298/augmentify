'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import('@/app/ui/components/lottieAnimation'), { ssr: false });

export default function ClientComponent() {
    return (
        <div className={"flex justify-start lg:ml-[200px] items-center min-h-screen sm:justify-left font-bold"}>
            <h2 className={"text-white lg:text-[64px] sd:text-[32px] font-solid "}>Welcome to<br/> Augmentify</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <LottieAnimation />
            </Suspense>
        </div>
    );
}

"use client"
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useRef} from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    //simple gsap animation
        //move the container from the bottom to the middle of the screen
        useGSAP(() => {
            gsap.fromTo(
                containerRef.current,
                {y: 1000, opacity: 0},
                {y: 50, opacity: 1, duration: 1.5}
            )
        });

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex items-center justify-center h-screen text-2xl ">
                <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 h-[50vh] w-[40vw]" ref={containerRef}>
                    <h1 className= " bg-gradient-to-br from-rose-300 to-rose-500 bg-clip-text text-transparent pb-8 text-center mb-[12vh] text-[32px]">
                        <strong>Welcome to Augmentify.</strong>
                    </h1>
                    <p className={"mb-5"}>Register now</p>
                    <Link
                        href={"/sign-up"}
                        className="flex items-center gap-5 rounded-3xl bg-rose-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
                    >
                        <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>
                    <Link
                    href={"/sign-in"}
                    className={"flex items-center text-sm mt-5 hover:text-blue-500"}
                    >
                        Already have an Account?
                    </Link>
                </div>
            </div>
        </main>
    );
}

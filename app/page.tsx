import { lusitana } from "@/app/ui/fonts";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex items-center justify-center h-screen text-2xl ">
                <div className="flex flex-col justify-center items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[50vh] w-[40vw]">
                    <h1 className={`${lusitana.className} antialiased text-red-700 pb-8 text-center mb-[12vh]`}>
                        <strong>Welcome to Augmentify.</strong>
                    </h1>
                    <Link
                        href={"/login"}
                        className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>
                </div>
            </div>
        </main>
    );
}

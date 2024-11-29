"use client"
import Link from 'next/link'
import { SignedIn, UserButton, useUser} from '@clerk/nextjs'
import {usePathname} from "next/navigation";


export default function Navbar() {
    const { isSignedIn } = useUser()
    const pathname = usePathname()

    // Don't render if not signed in or on home page
    if (!isSignedIn || pathname === '/') {
        return null
    }

    return (
        <header className='py-4 w-full'>
            <nav className='container flex items-center justify-between'>
                <ul className='flex gap-28 text-lg font-medium ml-5'>
                    <li className={"text-[32px] mr-[8vw]"}>
                        <Link href='/dashboard'>Augmentify</Link>
                    </li>
                    <li>
                        <Link href='/protected/server'>Augmentation</Link>
                    </li>
                    <li>
                        <Link href='/protected/client'>Dataset</Link>
                    </li>
                    <li>
                        <Link href='/api/me'>Projects</Link>
                    </li>
                </ul>

                <div className='flex items-center '>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: 'w-10 h-10'
                                }
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}
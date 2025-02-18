"use client"
// convert from client to server component by moving the auth check to a new function outside of this scope
import Link from 'next/link';
import { useUser, SignedIn, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import {
    ServerIcon,
    FolderIcon,
    Handshake,
} from 'lucide-react';

export default function SideNav() {
    const { isSignedIn } = useUser();
    const pathname = usePathname();

    // Don't render if not signed in or on home page
    if (!isSignedIn || pathname === '/') {
        return null;
    }

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white border-r sm:w-full sm:flex sm:h-[100%] md:flex md:flex-col md:w-full rounded-md">
            <Link
                className="mb-6 flex h-20 items-end justify-start bg-rose-400 p-4 md:h-40 roundex-3xl"
                href="/dashboard"
            >
                <div className="w-32 text-white md:w-40 text-2xl font-bold sm:text-[15px]">
                    Augmentify
                </div>
            </Link>

            <div className="flex grow flex-col space-y-2">
                <NavLinks />

                <div className="hidden h-auto w-full grow md:block"></div>

                <div className="flex items-center justify-center sm:justify-center">
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
                                    userButtonTrigger: 'hover:bg-gray-100 transition-all duration-300',
                                    userButtonPopoverCard: 'shadow-lg rounded-lg'
                                }
                            }}
                            showName
                        />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}

function NavLinks() {
    const links = [
        {
            name: 'Augmentation',
            href: '/dashboard/augmentation',
            icon: ServerIcon
        },
        {
            name: 'Projects',
            href: '/dashboard/projects',
            icon: FolderIcon
        },
        {
            name: "About",
            href: "/dashboard/about",
            icon: Handshake
        }
    ];
    return (
        <>
            {links.map((link) => {
                const IconComponent = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-red-500 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <IconComponent className="w-6" />
                        <span className="hidden md:block">{link.name}</span>
                    </Link>
                );
            })}
        </>
    );
}

"use client"


// convert from client to server component by moving the auth check to a new function outside of this scope
import Link from 'next/link';
import { useUser, SignedIn, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import {
    BookOpenIcon,
    ServerIcon,
    FolderIcon
} from 'lucide-react';

export default function SideNav() {
    const { isSignedIn } = useUser();
    const pathname = usePathname();

    // Don't render if not signed in or on home page
    if (!isSignedIn || pathname === '/') {
        return null;
    }

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white border-r">
            <Link
                className="mb-6 flex h-20 items-end justify-start rounded-md bg-rose-400 p-4 md:h-40"
                href="/dashboard"
            >
                <div className="w-32 text-white md:w-40 text-2xl font-bold">
                    Augmentify
                </div>
            </Link>

            <div className="flex grow flex-col space-y-2">
                <NavLinks />

                <div className="hidden h-auto w-full grow md:block"></div>

                <div className="flex items-center justify-end md:justify-start">
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: 'w-10 h-10',
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
            name: 'Dataset',
            href: '/dashboard/dataset',
            icon: BookOpenIcon
        },
        {
            name: 'Projects',
            href: '/dashboard/projects',
            icon: FolderIcon
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
﻿import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ModeToggle } from '@/components/mode-toggle';


export default function Root() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div id="detail">
                    <header className="bg-gray-100 dark:bg-gray-800 py-3 px-4 md:px-6 flex items-center justify-between">
                        <a className="flex items-center gap-2" href="#">
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg font-medium">Compete</span>
                        </a>
                        <ModeToggle/>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-9 w-9">
                                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                                    <AvatarFallback>JP</AvatarFallback>
                                    <span className="sr-only">Toggle user menu</span>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>My Account</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <Outlet />
                </div>
            </ThemeProvider>
        </>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
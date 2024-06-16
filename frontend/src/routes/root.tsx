import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { getCookie, deleteCookie } from "@/lib/utils"
//import { ModeToggle } from '@/components/mode-toggle';
//<ModeToggle />

export default function Root() {
    if (!getCookie("token")) {
        window.location.href = "/auth"
    }
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div id="detail">
                    <header className="bg-gray-100 dark:bg-gray-800 py-3 px-4 md:px-6 flex items-center justify-between">
                        <a className="flex items-center gap-2" href="/#">
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg font-medium">Code Royale</span>
                        </a>
                        <div className="flex items-center gap-4">
                            <DropdownMenu>

                                <DropdownMenuTrigger asChild>
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                                        <AvatarFallback>JP</AvatarFallback>
                                        <span className="sr-only">Toggle user menu</span>
                                    </Avatar>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <a href="/profile">
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                    </a>
                                    <a href="/account-settings">
                                        <DropdownMenuItem>Account Settings</DropdownMenuItem>
                                    </a>
                                    <DropdownMenuSeparator />
                                    <a onClick={() => {
                                        deleteCookie("token")
                                        window.location.href = "/auth"
                                    }}>
                                        <DropdownMenuItem>Logout</DropdownMenuItem>
                                    </a>
                                </DropdownMenuContent>

                            </DropdownMenu>
                        </div>
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
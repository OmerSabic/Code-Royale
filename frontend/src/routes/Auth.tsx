import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { authenticate } from "@/lib/api"

export default function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return (
        <>
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">{!isSignUp ? "Login" : "Sign Up"}</h1>
                            <p className="text-balance text-muted-foreground">
                                {!isSignUp ? "Enter your username below to log in to your account" : "Enter a username below to create an account"}
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>

                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="HeeHeeHeeHaw182"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>

                                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />

                            </div>

                            <Button type="submit" className="w-full" onClick={() => authenticate(username, password, isSignUp?'signup':'login').catch(error => setError(error.message)) }>
                                {!isSignUp ? "Login" : "Create Account"}
                            </Button>
                            <p className = "text-center text-red-600">{error}</p>
                        </div>
                        {
                            !isSignUp ? (
                                <div className="mt-4 text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <a onClick={() => setIsSignUp(true)} href="#" className="underline">
                                        Sign up
                                    </a>
                                </div>
                            ) : (
                                <div className="mt-4 text-center text-sm">
                                    Already have an account?{" "}
                                    <a onClick={() => setIsSignUp(false)} href="#" className="underline">
                                        Log in
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="hidden bg-muted lg:block max-h-screen">
                    <img
                        src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </>

    )
}



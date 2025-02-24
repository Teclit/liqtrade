"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({email: "", password: ""});

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (storedUser.email === user.email && storedUser.password === user.password) {
            // Save authentication token in cookies instead of localStorage
            document.cookie = `authToken=user-authenticated; path=/;`;

            router.push("/user"); // Redirect to user dashboard
        } else {
            alert("Identifiants incorrects !");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Se Connecter</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    style={{
                        color: "var(--whitebackground)",
                        backgroundColor: "var(--greencolor)",
                        border: "1px solid var(--greencolor)",
                    }}
                    onClick={handleLogin}
                >
                    se connecter
                </Button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Vous n'avez pas de compte ? <Link href="/auth/register" className="text-blue-500">s'inscrire</Link>
            </p>
        </div>
    );
}
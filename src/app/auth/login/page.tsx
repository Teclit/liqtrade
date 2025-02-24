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

        const now = new Date().getTime();
        const expirationTime = now + 60 * 60 * 1000; // 1 hour

        if (!storedUser.email || !storedUser.password) {
            // User does not exist, create new user
            localStorage.setItem("user", JSON.stringify(user));
            alert("Utilisateur créé avec succès !");

            // Store authentication token with expiration
            localStorage.setItem("authData", JSON.stringify({
                token: "user-authenticated",
                expiresAt: expirationTime,
            }));

            router.push("/user"); // Redirect to user dashboard
        } else if (storedUser.email === user.email && storedUser.password === user.password) {
            // User exists, store session for 1 hour
            localStorage.setItem("authData", JSON.stringify({
                token: "user-authenticated",
                expiresAt: expirationTime,
            }));

            router.push("/user");
        } else {
            alert("Identifiants incorrects !");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-6 text-black  bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Se Connecter</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2  border rounded-lg"
                        required
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mot de passe</label>
                    <input
                        type="password"
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
                    Se connecter
                </Button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Vous n'avez pas de compte ?{" "}
                <Link href="/auth/register" className="text-blue-500">S'inscrire</Link>
            </p>
        </div>
    );
}

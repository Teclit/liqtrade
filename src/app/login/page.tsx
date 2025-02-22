"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const router = useRouter(); // Utilisé pour rediriger vers /user

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();


        console.log("Login form submitted", formData);

       // Fake token
        const token = "fake-jwt-token";

        // Set token in localStorage with expiration of 2 hours
        const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 heures
        localStorage.setItem("authToken", JSON.stringify({ token, expiresAt: expirationTime }));

        router.push("/user");
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Se Connecter</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
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
                >
                    se connecter
                </Button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Vous n'avez pas de compte ? <Link href="/register" className="text-blue-500">s'inscrire</Link>
            </p>
        </div>
    );
}
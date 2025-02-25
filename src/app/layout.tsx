import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {cookies} from "next/headers"; // Fetch localStorage equivalent on server
import AuthProvider from "@/context/AuthProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LiqTrade - Financial Solutions",
    description: "Professional financial services platform",
};

// Make the function `async` to await `cookies()`
export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <AuthProvider>
            {/* Show Navbar only if user is NOT authenticated */}
            <main>{children}</main>
        </AuthProvider>
        </body>
        </html>
    );
}

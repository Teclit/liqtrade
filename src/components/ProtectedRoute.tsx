"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("authData") || "{}");
        const now = new Date().getTime();

        if (!authData?.token || now >= authData.expiresAt) {
            localStorage.removeItem("authData"); // Remove expired session
            router.push("/auth/login");
        } else {
            setAuthenticated(true);
        }
    }, [router]);

    if (!authenticated) {
        return <p>Loading...</p>;
    }

    return <>{children}</>;
}

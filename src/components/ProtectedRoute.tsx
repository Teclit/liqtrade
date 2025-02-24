"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Check for authToken in cookies
        const token = document.cookie.split("; ").find(row => row.startsWith("authToken="));

        if (!token) {
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

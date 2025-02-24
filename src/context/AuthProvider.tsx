"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    logout: () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for authentication token in cookies
        const token = document.cookie.split("; ").find(row => row.startsWith("authToken="));
        setIsAuthenticated(!!token);
    }, []);

    const logout = () => {
        // Remove authentication token from cookies
        document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        setIsAuthenticated(false);
        window.location.href = "/auth/login"; // Redirect to login page
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

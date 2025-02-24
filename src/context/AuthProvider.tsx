"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    logout: () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for authentication token in localStorage
        const authData = JSON.parse(localStorage.getItem("authData") || "{}");

        if (authData?.token && authData?.expiresAt) {
            const now = new Date().getTime();

            // Check if token is expired
            if (now >= authData.expiresAt) {
                alert("Votre session a expiré. Veuillez vous reconnecter.");
                logout();
            } else {
                setIsAuthenticated(true);

                // Set a timeout to alert before session expiration
                setTimeout(() => {
                    alert("Votre session expirera dans 5 minutes. Veuillez sauvegarder votre travail.");
                }, authData.expiresAt - now - 5 * 60 * 1000);
            }
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("authData");
        setIsAuthenticated(false);
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

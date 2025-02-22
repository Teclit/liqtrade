"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Define left and right route groups
    const leftRoutes = [
        { name: "Prêt", path: "/pret" },
        { name: "Affacturage", path: "/affacturage" },
    ];

    const rightRoutes = [
        { name: "Simulateur", path: "/simulateur" },
        { name: "Contact", path: "/contact" },
        { name: "Publications", path: "/publications" },
    ];

    return (
        <nav  style={{ backgroundColor: 'var(--whitebackground)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side: Logo and left routes (for md and up) */}
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center mr-7">
                            <Image
                                src="/liqtrade-logo.png"
                                alt="LIQTRADE"
                                width={150}
                                height={100}
                            />
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            {leftRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    className={`text-gray-600 hover:text-gray-900 transition-colors ${
                                        pathname === route.path ? "text-blue-600 font-medium" : ""
                                    }`}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Right routes and buttons (for md and up) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center space-x-8">
                            {rightRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    className={`text-gray-600 hover:text-gray-900 transition-colors ${
                                        pathname === route.path ? "text-blue-600 font-medium" : ""
                                    }`}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button
                                className="hidden md:inline-flex px-4 py-2 rounded-lg transform transition hover:scale-105 "
                                style={{
                                    backgroundColor: 'var(--whitebackground)',
                                    color: 'var(--greencolor)',
                                    border: '1px solid var(--greencolor)'
                                }}
                            >
                                S&apos;inscrire
                            </Button>
                            <Button
                                className="px-4 py-2 rounded-md transform transition hover:scale-105 "
                                style={{ color: 'var(--whitebackground)', backgroundColor: 'var(--greencolor)' }}
                            >
                                Se connecter
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button (for smaller screens) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                // Close icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
                        {/* Render all routes for mobile (both left and right) */}
                        {[...leftRoutes, ...rightRoutes].map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block text-gray-600 hover:text-gray-900 transition-colors ${
                                    pathname === route.path ? "text-blue-600 font-medium" : ""
                                }`}
                            >
                                {route.name}
                            </Link>
                        ))}

                        {/* Mobile Buttons */}
                        <div className="flex flex-col space-y-2">
                            <Button
                                className="w-full px-4 py-2 rounded-lg"
                                style={{
                                    backgroundColor: 'var(--whitebackground)',
                                    color: 'var(--greencolor)',
                                    border: '1px solid var(--greencolor)'
                                }}
                            >
                                S&apos;inscrire
                            </Button>
                            <Button
                                className="w-full px-4 py-2 rounded-md"
                                style={{ color: 'var(--whitebackground)', backgroundColor: 'var(--greencolor)' }}
                            >
                                Se connecter
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

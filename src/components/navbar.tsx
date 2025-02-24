"use client";

import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {CiMenuBurger} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Define left and right route groups
    const leftRoutes = [
        {name: "Prêt", path: "/pret"},
        {name: "Affacturage", path: "/affacturage"},
        {name: "User", path: "/user"},
    ];

    const rightRoutes = [
        {name: "Simulateur", path: "/simulateur"},
        {name: "Contact", path: "/contact"},
        {name: "Publications", path: "/publications"},
    ];

    return (

        <nav style={{backgroundColor: "var(--whitebackground)"}}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo et liens à gauche */}
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center mr-7">
                            <Image
                                src="/liqtrade-logo.png"
                                alt="LIQTRADE"
                                width={150}
                                height={100}
                                priority
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
                            <Link href="/auth/register">
                                <Button
                                    className="hidden md:inline-flex px-4 py-2 rounded-lg transform transition hover:scale-105 "
                                    style={{
                                        backgroundColor: 'var(--whitebackground)',
                                        color: 'var(--greencolor)',
                                        border: '1px solid var(--greencolor)'
                                    }}
                                >
                                    S'inscrire
                                </Button>
                            </Link>
                            <Link href="/auth/login">
                                <Button
                                    className="px-4 py-2 rounded-md transform transition hover:scale-105 "
                                    style={{color: 'var(--whitebackground)', backgroundColor: 'var(--greencolor)'}}
                                >
                                    Se connecter
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button (for smaller screens) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                // Icône de fermeture avec taille et couleur personnalisées
                                <TfiClose size={24} color="var(--darkcolor)"/>
                            ) : (
                                // Icône hamburger avec taille et couleur personnalisées
                                <CiMenuBurger size={24} color="var(--darkcolor)"/>
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
                            <Link href="/register">
                                <Button
                                    className="w-full px-4 py-2 rounded-lg"
                                    style={{
                                        backgroundColor: 'var(--whitebackground)',
                                        color: 'var(--greencolor)',
                                        border: '1px solid var(--greencolor)'
                                    }}
                                >
                                    S'inscrire
                                </Button>
                            </Link>

                            <Link href="/login">
                                <Button
                                    className="w-full px-4 py-2 rounded-md"
                                    style={{color: 'var(--whitebackground)', backgroundColor: 'var(--greencolor)'}}
                                >
                                    Se connecter
                                </Button>
                            </Link>


                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { FaExchangeAlt, FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import { RiFolderUserLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdNotificationImportant } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface SidebarProps {
    logoutAction: () => void;
}

const linksConfig = [
    { name: "Tableau-de-Bord", label: "Tableau de Bord", icon: <RiFolderUserLine /> },
    { name: "Mes-Transactions", label: "Mes Transactions", icon: <FaExchangeAlt /> },
    { name: "Mes-Clients", label: "Mes Clients", icon: <FaUserTie /> },
    { name: "Assistance", label: "Assistance", icon: <IoHelpBuoyOutline /> },
];

const settingsLinksConfig = [
    { name: "Notifications", label: "Notifications", icon: <MdNotificationImportant /> },
    { name: "Réglages", label: "Réglages", icon: <FiSettings /> },
];

export default function Sidebar({ logoutAction }: SidebarProps) {
    const [activeLink, setActiveLink] = useState("Tableau-de-Bord");
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size and set mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const setActiveLinkHandler = (linkName: string) => setActiveLink(linkName);

    const renderLink = ({ name, label, icon }: { name: string; label: string; icon: React.ReactNode }) => {
        const isActive = activeLink === name;
        const linkClasses = `flex items-center gap-3 hover:text-blue-700 ${
            isActive ? "text-blue-700 bg-gray-300 py-2 px-2 rounded" : "text-gray-700"
        }`;

        return (
            <Link
                key={name}
                href="#"
                onClick={() => setActiveLinkHandler(name)}
                className={linkClasses}
            >
                {icon} {label}
            </Link>
        );
    };

    return (
        <>
            {/* Desktop Sidebar (Visible on large screens) */}
            <div className="hidden lg:block w-72 bg-white shadow-md p-6 h-screen">
                <Link href="/" className="flex items-center">
                    <Image src="/liqtrade-logo.png" alt="LIQTRADE" width={150} height={100} priority />
                </Link>

                <nav className="mt-6 space-y-5">{linksConfig.map(renderLink)}</nav>

                <div className="mt-10 pt-6 space-y-5">{settingsLinksConfig.map(renderLink)}</div>

                {/* User Info */}
                <div className="ml-0 mt-8 py-14 flex items-center gap-1">
                    <Image
                        src="/joseph.jpg"
                        alt="User profile"
                        width={60}
                        height={60}
                        priority
                        className="object-cover rounded-full w-14 h-14"
                    />
                    <div>
                        <p className="font-semibold text-black">Paul Dumartin</p>
                        <p className="text-xs text-black">
                            Statut Vérification KYC : <span className={`${styles.greenText} text-xs`}>Valide</span>
                        </p>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={logoutAction}
                    className="mt-5 rounded p-3 text-red-700 hover:bg-red-400 hover:text-white transition-colors duration-300"
                >
                    Déconnexion
                </button>
            </div>

            {/* Mobile & Tablet Sidebar (Dropdown Menu for screen width <1000px) */}
            {isMobile && (
                <>
                    {/* Navbar with Menu Button */}
                    <div className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
                        <Link href="/" className="flex items-center">
                            <Image src="/liqtrade-logo.png" alt="LIQTRADE" width={120} height={80} priority />
                        </Link>

                        <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Sidebar Drawer */}
                    <div
                        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
                            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onClick={toggleSidebar}
                    >
                        <div
                            className={`bg-white w-64 h-full p-6 shadow-md transform transition-transform duration-300 ${
                                isOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="text-gray-700 absolute top-4 right-4" onClick={toggleSidebar}>
                                <FaTimes size={24} />
                            </button>

                            {/* Navigation Links */}
                            <nav className="mt-6 space-y-5">{linksConfig.map(renderLink)}</nav>
                            <div className="mt-10 pt-6 space-y-5">{settingsLinksConfig.map(renderLink)}</div>

                            {/* User Info */}
                            <div className="ml-0 mt-8 py-14 flex items-center gap-1">
                                <Image
                                    src="/joseph.jpg"
                                    alt="User profile"
                                    width={60}
                                    height={60}
                                    priority
                                    className="object-cover rounded-full w-14 h-14"
                                />
                                <div>
                                    <p className="font-semibold text-black">Paul Dumartin</p>
                                    <p className="text-xs text-black">
                                        Statut Vérification KYC : <span className={`${styles.greenText} text-xs`}>Valide</span>
                                    </p>
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={logoutAction}
                                className="mt-5 rounded p-3 text-red-700 hover:bg-red-400 hover:text-white transition-colors duration-300"
                            >
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
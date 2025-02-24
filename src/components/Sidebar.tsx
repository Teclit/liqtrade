"use client";

import {FaExchangeAlt, FaUserTie} from "react-icons/fa";
import {RiFolderUserLine} from "react-icons/ri";
import {IoHelpBuoyOutline} from "react-icons/io5";
import {MdNotificationImportant} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import Image from "next/image";
import React, {useState} from "react";
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

    const setActiveLinkHandler = (linkName: string) => setActiveLink(linkName);

    const renderLink = ({
                            name,
                            label,
                            icon,
                        }: {
        name: string;
        label: string;
        icon: React.ReactNode;
    }) => {
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
        <div className="w-72 bg-white shadow-md p-6 h-auto">
            <Link href="/" className="flex items-center ">
                <Image
                    src="/liqtrade-logo.png"
                    alt="LIQTRADE"
                    width={150}
                    height={100}
                    priority
                />
            </Link>

            <nav className="mt-6 space-y-5">
                {linksConfig.map(renderLink)}
            </nav>

            <div className="mt-10 pt-6 space-y-5">
                {settingsLinksConfig.map(renderLink)}
            </div>

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
            <div>
                <button onClick={logoutAction}
                        className="mt-5 rounded p-3 text-red-700 hover:bg-red-400 hover:text-white transition-colors duration-300"
                >
                    Déconnexion
                </button>
            </div>
        </div>
    );
}
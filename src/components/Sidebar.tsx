"use client";

import {FaExchangeAlt, FaUserTie} from "react-icons/fa";
import {RiFolderUserLine} from "react-icons/ri";
import {IoHelpBuoyOutline} from "react-icons/io5";
import {MdNotificationImportant} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export default function Sidebar() {
    const [activeLink, setActiveLink] = useState("Tableau-de-Bord");

    const handleActive = (linkName: string) => setActiveLink(linkName);

    return (
        <div className="w-72 bg-white shadow-md p-6 h-auto">
            <h2 className="text-xl font-bold text-blue-700">LIQTRADE</h2>

            <nav className="mt-6 space-y-5">
                <Link
                    href="#"
                    onClick={() => handleActive("Tableau-de-Bord")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Tableau-de-Bord"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <RiFolderUserLine /> Tableau de Bord
                </Link>
                <Link
                    href="#"
                    onClick={() => handleActive("Mes-Transactions")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Mes-Transactions"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <FaExchangeAlt /> Mes Transactions
                </Link>
                <Link
                    href="#"
                    onClick={() => handleActive("Mes-Clients")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Mes-Clients"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <FaUserTie /> Mes Clients
                </Link>
                <Link
                    href="#"
                    onClick={() => handleActive("Assistance")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Assistance"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <IoHelpBuoyOutline /> Assistance
                </Link>
            </nav>

            <div className="mt-10 pt-6 space-y-5">
                <Link
                    href="#"
                    onClick={() => handleActive("Notifications")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Notifications"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <MdNotificationImportant /> Notifications
                </Link>

                <Link
                    href="#"
                    onClick={() => handleActive("Réglages")}
                    className={`flex items-center gap-3 hover:text-blue-700 ${
                        activeLink === "Réglages"
                            ? "text-blue-700 bg-gray-300 py-2 px-2 rounded"
                            : "text-gray-700"
                    }`}
                >
                    <FiSettings /> Réglages
                </Link>
            </div>

            <div className="mt-10 py-14 flex items-center gap-4">
                <Image
                    src="/joseph.jpg"
                    alt="User profile"
                    width={70}
                    height={70}
                    priority
                    className="object-cover rounded-full w-20 h-20"
                />
                <div>
                    <p className="font-semibold text-black">Paul Dumartin</p>
                    <p className="text-sm text-black">
                        Statut Vérification KYC : <span className={"text-green-500"}>Valide</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
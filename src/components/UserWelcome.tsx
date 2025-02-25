"use client";

import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function UserWelcome() {
    return (
        <div className={`${styles.blackText} flex-1 flex flex-col`}>
            {/* Header Section */}
            <header className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left my-4">
                <h1 className="text-2xl sm:text-3xl font-bold">Bonjour Paul !</h1>
                <Image
                    src="/joseph.jpg"
                    alt="User profile"
                    width={80}
                    height={80}
                    priority
                    className="object-cover rounded-full w-16 h-16 sm:w-20 sm:h-20 mt-4 sm:mt-0"
                />
            </header>

            {/* Buttons Section */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

                {/* Left Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    <button className={`${styles.blueText} ${styles.lightblueBackground} px-6 py-2 rounded-md`}>
                        Mes prêts
                    </button>
                    <button
                        className={`${styles.darkText} ${styles.whiteBackground} px-6 py-2 bg-gray-200 rounded-md`}>
                        Mes factures
                    </button>
                </div>

                {/* Right Button (Demander un financement) */}
                <button
                    className={`${styles.whiteText} ${styles.blueBackground} hover:${styles.hoverBtn} px-4 py-3 font-bold rounded-md shadow w-full sm:w-auto`}>
                    Demander un financement
                </button>
            </div>
        </div>
    );
}
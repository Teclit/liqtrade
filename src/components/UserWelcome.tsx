"use client";

import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function UserWelcome() {
    return (
        <div className={`${styles.blackText} flex-1 `}>
            <header className="flex justify-between items-center my-2 ">
                <h1 className="text-3xl font-bold">Bonjour Paul !</h1>
                <Image
                    src="/joseph.jpg"
                    alt="User profile"
                    width={80}
                    height={80}
                    priority
                    className="object-cover rounded-full w-20 h-20"
                />
            </header>

            <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-4">
                    <button className={`${styles.blueText} ${styles.lightblueBackground} px-6 py-2 rounded-md`}>
                        Mes prêts
                    </button>
                    <button
                        className={`${styles.darkText} ${styles.whiteBackground} px-6 py-2 bg-gray-200 rounded-md`}>
                        Mes factures
                    </button>
                </div>

                <button
                    className={`${styles.whiteText} ${styles.blueBackground} hover:${styles.hoverBtn} px-4 py-3 font-bold rounded-md shadow`}>
                    Demander un financement
                </button>
            </div>
        </div>
    );
}
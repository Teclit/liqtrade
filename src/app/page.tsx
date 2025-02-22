"use client";

import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaLongArrowAltRight} from "react-icons/fa";
import styles from "../styles/Home.module.css"; // Import the CSS module

export default function Home() {
    return (
        <div className={styles.container}>
            {/* Left column: Text and buttons aligned to the right */}
            <div className={styles.leftColumn}>
                <h3 className="font-semibold mb-4">
                    FINANCEMENT PROFESSIONNEL À COURT TERME.
                </h3>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                    Notre intérêt,{" "}
                    <span className="block">c'est le vôtre.</span>
                </h1>
                <p className="text-md mb-8 md:text-balance">
                    Simple, efficace et rapide. Profitez du service Liqtrade
                    <span className="block">sans garantie personnelle.</span>
                </p>

                <div className="flex flex-wrap gap-4 justify-end">
                    <Button size="lg" asChild>
                        <Link
                            href="/contact"
                            className="transform transition hover:scale-105"
                            style={{
                                color: "var(--whitebackground)",
                                backgroundColor: "var(--greencolor)",
                                border: "1px solid var(--greencolor)",
                            }}
                        >
                            Se connecter
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="group">
                        <Link
                            href="/simulateur"
                            className="flex items-center transform transition hover:scale-105"
                            style={{
                                backgroundColor: "var(--whitebackground)",
                                color: "var(--greencolor)",
                                border: "none",
                                borderBottom: "2px solid var(--greencolor)",
                            }}
                        >
                            S&apos;inscrire
                            <FaLongArrowAltRight className="ml-2"/>
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Right column: Image */}
            <div className={styles.rightColumn}>
                <Image
                    src="/home.png"
                    alt="Image d'accueil"
                    width={900}
                    height={500}
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaLongArrowAltRight} from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-white min-h-[calc(100vh-4rem)]">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Left column: Text and buttons aligned to the right */}
                <div className="flex flex-col justify-center items-end">
                    <p className="text-blue-600 font-semibold mb-4 text-right">
                        FINANCEMENT PROFESSIONNEL À COURT TERME.
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 text-right">
                        Notre intérêt,{" "}
                        <span className="block">c&apos;est le vôtre.</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 text-right">
                        Simple, efficace et rapide. Profitez du service Liqtrade <br/>
                        sans garantie personnelle.
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
                                S'inscrire
                                < FaLongArrowAltRight className={"ml-2"}/>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right column: Image */}
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/home.png"
                        alt="Image d'accueil"
                        width={900}
                        height={500}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

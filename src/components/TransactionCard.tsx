"use client";

import { FaCheckCircle, FaCheckSquare, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { LuDownload } from "react-icons/lu";
import Image from "next/image";

const data = [
    { name: "Accord ouverture", value: 50, color: "#00C49F" },
    { name: "Accord demande", value: 20, color: "#FF9900" },
    { name: "Évaluation des risques", value: 40, color: "#0088FE" },
    { name: "Évaluation des risques", value: 100, color: "#c1d4e4" },
];

export default function TransactionCard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between w-full">
            {/* État du prêt */}
            <div className="bg-white p-6 shadow rounded-md flex flex-col justify-between flex-1 min-w-[250px] max-w-[300px]">
                <h3 className="font-semibold mb-4">État</h3>
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">Prêt Société</p>
                    <p className="text-green-500 font-semibold flex items-center gap-1">
                        Validé <FaCheckCircle />
                    </p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-green-500 w-full rounded-full"></div>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-700">Prêt HotDoggs</p>
                    <p className="text-blue-500 font-semibold flex items-center gap-1">
                        En attente <FaClock />
                    </p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 w-2/5 rounded-full"></div>
                </div>

                <a href="#" className="text-gray-700 text-sm mt-4 block underline">
                    Créer un nouveau dossier
                </a>
            </div>

            {/* Montant du prêt */}
            <div className="bg-white p-6 shadow rounded-md flex flex-col justify-between flex-1 text-center min-w-[250px] max-w-[300px]">
                <h3 className="text-left font-semibold mb-2">Prêt Société</h3>
                <p className="text-3xl font-bold text-gray-900">39 234€</p>
                <p className="text-gray-500 text-sm">Montant du prêt en cours</p>
                <p className="text-green-500 font-semibold flex justify-center items-center gap-1 mt-2">
                    Prêt validé <FaCheckCircle />
                </p>
            </div>

            {/* Évaluation des risques */}
            <div className="bg-white text-left text-xs p-6 shadow rounded-md flex-1 min-w-[280px] max-w-[320px]">
                <div className="flex justify-between">
                    <h3 className="font-semibold">En attente</h3>
                    <p className="text-gray-500 font-semibold">Prêt HotDoggs</p>
                </div>

                <div className="flex justify-between mt-4">
                    <div>
                        <PieChart width={80} height={80}>
                            <Pie
                                data={data}
                                dataKey="value"
                                outerRadius={35}
                                innerRadius={18}
                                fill="#8884d8"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>

                    <div className="mt-4 space-y-1">
                        <p className="flex items-center gap-2">
                            <FaCheckSquare className="text-green-500" /> Accord ouverture
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCheckSquare className="text-orange-500" /> Accord demande
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCheckSquare className="text-green-500" /> Évaluation des risques
                        </p>
                    </div>
                </div>

                <p className="text-gray-500 text-xs mt-4">
                    Pour déclencher la prochaine étape de validation, veuillez nous joindre:
                </p>
                <a href="#" className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                    <LuDownload className="text-gray-400" /> Dossier super important.pdf
                </a>
            </div>

            {/* Clôture du prêt */}
            <div className="bg-white text-left p-5 shadow rounded-md flex-1 text-xs min-w-[250px] max-w-[300px]">
                <h3 className="font-semibold">Clôturé</h3>
                <div className="flex justify-center my-4">
                    <Image src="/achievement.png" alt="User profile" width={50} height={30} priority />
                </div>

                <p className="text-gray-500 text-xs">Prêt Société</p>
                <p className="text-gray-500 text-xs">Estimation de clôture du dossier :</p>
                <p className="text-gray-900 font-bold text-xs">13/06/2022</p>
            </div>
        </div>
    );
}

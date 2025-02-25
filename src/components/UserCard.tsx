import { MdEditSquare } from "react-icons/md";
import Image from "next/image";
import React from "react";

export default function UserCard() {
    return (
        <div className="mt-6 flex flex-col">
            <h1 className="text-xl font-bold">Mon compte</h1>

            {/* Responsive Cards Container */}
            <div className="mt-4 flex flex-wrap md:flex-row justify-between gap-4">

                {/* User Info Card */}
                <div className="bg-white p-4 shadow rounded-md flex-1 min-w-[200px] flex flex-col justify-between">
                    <div className="self-end">
                        <MdEditSquare className="text-gray-600 text-xl" />
                    </div>
                    <div className="self-start text-left">
                        <p className="text-black font-bold text-sm">Paul Dumartin</p>
                        <p className="text-gray-500 text-xs">14 rue du Louvre, Paris</p>
                    </div>
                </div>

                {/* Segment Card */}
                <div className="bg-white p-4 shadow rounded-md flex-1 min-w-[200px] flex flex-col justify-between">
                    <p className="text-gray-500 text-xs">Segment</p>
                    <p className="text-blue-600 text-xl font-bold self-end">RET</p>
                </div>

                {/* Risk Evaluation Card */}
                <div className="bg-white p-4 shadow rounded-md flex-1 min-w-[200px] flex flex-col justify-between">
                    <p className="text-gray-500 text-xs">Évaluation des risques</p>
                    <p className="text-green-400 text-xs">Risque faible</p>
                    <p className="text-green-400 text-2xl font-bold self-end">B</p>
                </div>

                {/* Risk Score Card */}
                <div className="bg-white p-4 shadow rounded-md flex-1 min-w-[200px] flex flex-col justify-between">
                    <p className="text-gray-500 text-xs">Score risque</p>
                    <p className="text-black font-bold text-xs">Lorem Ipsum</p>
                    <div className="flex justify-between">
                        <p className="text-gray-500 text-xs font-bold">A</p>
                        <p className="text-gray-500 text-xs font-bold">C</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="relative flex-1 h-2 rounded-full overflow-hidden">
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-green-400"></div>
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-orange-400"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-white rounded-full"></div>
                    </div>
                </div>

                {/* Last Transaction Amount Card */}
                <div className="bg-white p-4 shadow rounded-md flex-1 min-w-[200px] flex flex-col justify-between">
                    <p className="text-gray-500 text-xs">Montant dernière transaction</p>
                    <p className="text-blue-600 text-2xl font-bold">80K</p>
                    <div className="self-end">
                        <Image
                            src="/coin.png"
                            alt="User profile"
                            width={40}
                            height={40}
                            priority
                            className="object-cover rounded-full w-10 h-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

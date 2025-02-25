"use client";

import { useState } from "react";

interface FinancialTableProps {
    tabs: string[],
    table: {
        tenor: string;
        marketPlace: string;
        marketRiskFreeDate: string;
        marketRiskFreePremium: string;
        change: string;
        variation: string;
    }[],
}

export default function FinancialTable({ tabs, table }: FinancialTableProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="bg-white p-6 shadow rounded-md flex-1 min-w-[300px] w-full">
            {/* Tabs */}
            <div className="flex flex-wrap justify-between border-b bg-gray-50 text-sm font-bold">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 ${
                            activeTab === tab ? "bg-blue-100 text-blue-700 font-semibold rounded-t-md" : "text-gray-500"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto mt-4">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                    <tr className="border-b text-center text-xs sm:text-sm text-gray-600 font-semibold py-2">
                        <th className="px-3 py-2">Tenor</th>
                        <th className="px-3 py-2">Market Place</th>
                        <th className="px-3 py-2">Market Risk Free Date</th>
                        <th className="px-3 py-2">Market Risk Free Premium</th>
                        <th className="px-3 py-2">Change %</th>
                        <th className="px-3 py-2">Variation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table.map((row, index) => (
                        <tr key={index} className="border-b text-center text-xs sm:text-sm text-gray-600">
                            <td className="py-2 px-3">{row.tenor}</td>
                            <td className="py-2 px-3">{row.marketPlace}</td>
                            <td className="py-2 px-3">{row.marketRiskFreeDate}</td>
                            <td className="py-2 px-3">{row.marketRiskFreePremium}</td>
                            <td className="py-2 px-3">{row.change}</td>
                            <td className="py-2 px-3">{row.variation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
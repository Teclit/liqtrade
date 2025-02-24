"use client";

import { useState } from "react";

interface FinancialTableProps {
    tabs: string[];
    table: {
        tenor: string;
        marketPlace: string;
        marketRiskFreeDate: string;
        marketRiskFreePremium: string;
        change: string;
        variation: string;
    }[];
}

export default function FinancialTable({ tabs, table }: FinancialTableProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="bg-white p-6 shadow rounded-md flex-1">
            {/* Tabs */}
            <div className="flex  justify-between  border-b bg-gray-50 text-sm font-bold">
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

            {/* Table */}
            <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="border-b text-center text-xs text-gray-600 font-semibold py-2">
                        <th >Tenor</th>
                        <th >Market Place</th>
                        <th >Market Risk Free Date</th>
                        <th >Market Risk Free Premium</th>
                        <th >Change %</th>
                        <th >Variation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table.map((row, index) => (
                        <tr key={index} className="border-b text-center text-xs text-gray-600 ">
                            <td className="py-2">{row.tenor}</td>
                            <td className="py-2">{row.marketPlace}</td>
                            <td className="py-2">{row.marketRiskFreeDate}</td>
                            <td className="py-2">{row.marketRiskFreePremium}</td>
                            <td className="py-2">{row.change}</td>
                            <td className="py-2">{row.variation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

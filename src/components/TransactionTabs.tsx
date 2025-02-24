"use client";

import { useState } from "react";

const tabs = ["Actifs", "En attente (1)", "Clos"];

export default function TransactionTabs({ setActiveTabAction }: { setActiveTabAction: (tab: string) => void }) {
    const [selected, setSelected] = useState("Actifs");

    const handleTabClick = (tab: string) => {
        setSelected(tab);
        setActiveTabAction(tab);
    };

    return (
        <div className="bg-white my-4 text-sm gap-4 border-b inline-flex">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-6 py-2 ${
                        selected === tab ? "bg-green-500 text-white rounded-md" : "text-gray-500"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
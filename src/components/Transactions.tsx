"use client";

import { useEffect, useState } from "react";
import TransactionTabs from "./TransactionTabs";
import TransactionCard from "./TransactionCard";
import ContractDetailsTable from "@/components/ContractDetailsTable";
import { contractDetails, loanConditions } from "../../transactionData";
import LoanConditionsTable from "@/components/LoanConditionsTable";

export default function Transactions() {
    const [activeTab, setActiveTab] = useState<string>("Actifs");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <p className="text-center text-gray-500">Loading transactions...</p>;

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">Transactions</h2>

            <TransactionTabs setActiveTabAction={setActiveTab} />

            {activeTab === "Actifs" && (
                <div className="flex flex-wrap gap-6 mt-6">
                    <TransactionCard />
                    <ContractDetailsTable data={contractDetails} />
                    <LoanConditionsTable data={loanConditions} />
                </div>
            )}
        </div>
    );
}

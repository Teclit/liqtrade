"use client";

import {useState} from "react";
import TransactionTabs from "./TransactionTabs";
import LoanStatus from "./LoanStatus";
import LoanSummary from "./LoanSummary";
import PendingValidation from "./PendingValidation";
import ClosedLoan from "./ClosedLoan";
import ContractDetailsTable from "@/components/ContractDetailsTable";
import {contractDetails, loanConditions} from "../../transactionData";
import LoanConditionsTable from "@/components/LoanConditionsTable";

export default function Transactions() {
    const [activeTab, setActiveTab] = useState<string>("Actifs");

    return (
        <div className="  p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl gap-2 font-bold">Transactions</h2>

            <TransactionTabs setActiveTabAction={setActiveTab} />

            {activeTab === "Actifs" && (
                <div className="flex flex-wrap gap-6 mt-6">
                    <LoanStatus />
                    <LoanSummary />
                    <PendingValidation />
                    <ClosedLoan />
                    <ContractDetailsTable data={contractDetails} />
                    <LoanConditionsTable data={loanConditions} />
                </div>
            )}
        </div>
    );
}
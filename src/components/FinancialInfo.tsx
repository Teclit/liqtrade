import FinancialChart from "@/components/FinancialChart";
import FinancialTable from "@/components/FinancialTable";
import React, { useEffect, useState } from "react";
import { chartData, financialData } from "../../data";

export default function FinancialInfo() {
    const [data, setData] = useState(chartData);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setData(chartData);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col gap-6 my-7">
            <h1 className="text-xl font-bold">Informations financières</h1>

            {/* Responsive Container */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <FinancialChart data={data} />
                <FinancialTable tabs={financialData.tabs} table={financialData.table}  />
            </div>
        </div>
    );
}
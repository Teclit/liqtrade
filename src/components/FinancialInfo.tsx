import FinancialChart from "@/components/FinancialChart";
import FinancialTable from "@/components/FinancialTable";
import React, {useEffect, useState} from "react";
import {chartData, financialData} from "../../data";

export default function FinancialInfo() {
    const [data, setData] = useState(chartData); // Initialize with default data

    useEffect(() => {
        // Simulate fetching data (In real case, replace with API fetch)
        setTimeout(() => {
            setData(chartData);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col gap-4 my-7">
            <h1 className="text-xl font-bold">Informations financières</h1>
            <div className=" flex justify-between gap-4">
                <FinancialChart data={data} />
                <FinancialTable tabs={financialData.tabs} table={financialData.table} />
            </div>

        </div>
    );
}

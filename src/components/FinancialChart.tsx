"use client";

import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

interface FinancialChartProps {
    data: { name: string; value1: number; value2: number; value3: number }[],
}

export default function FinancialChart({data}: FinancialChartProps) {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-2 min-w-[300px]">
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="value1" stroke="#00C49F" strokeWidth={2}/>
                    <Line type="monotone" dataKey="value2" stroke="#0088FE" strokeWidth={2}/>
                    <Line type="monotone" dataKey="value3" stroke="#FF8042" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
                <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span> Lorem Ipsum
                </span>
                <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span> Lorem Ipsum
                </span>
                <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span> Lorem Ipsum
                </span>
            </div>
        </div>
    );
}
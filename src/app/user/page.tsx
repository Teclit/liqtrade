"use client";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import React, {useContext} from "react";
import {AuthContext} from "@/context/AuthProvider";
import UserCard from "@/components/UserCard";
import FinancialChart from "@/components/FinancialChart";
import Transactions from "@/components/Transactions";
import UserWelcome from "@/components/UserWelcome";
import styles from "@/styles/Home.module.css";

export default function UserDashboard() {
    const {logout} = useContext(AuthContext);
    return (
        <ProtectedRoute>
            <div className="flex h-auto bg-gray-100">
                <Sidebar logoutAction={logout} />
                <div className={`${styles.blackText} flex-1 ml-3 px-4`}>
                    <UserWelcome />
                    <UserCard />
                    <FinancialChart />
                    <Transactions />
                </div>
            </div>
        </ProtectedRoute>
    );
}
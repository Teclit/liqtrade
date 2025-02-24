"use client";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthProvider";

export default function UserDashboard() {
    const { logout } = useContext(AuthContext);
    return (
        <ProtectedRoute>
            <div className="flex h-auto bg-gray-100">
                {/* Sidebar */}
                <Sidebar/>

                {/* Main Content
            <div className="flex-1 p-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Bonjour Paul !</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                        Demander un financement
                    </button>
                </header>


                <div className="mt-6 flex gap-4">
                    <button className="px-6 py-2 bg-purple-200 rounded-md">Mes prêts</button>
                    <button className="px-6 py-2 bg-gray-200 rounded-md">Mes factures</button>
                </div>
            */}


                {/*
                <UserCard />
                <FinancialChart />
                <Transactions />


            </div>
             */}
            </div>
            <p>Voici votre tableau de bord.</p>
            <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Déconnexion
            </button>
        </ProtectedRoute>
    );
}

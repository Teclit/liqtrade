import {FaChartPie, FaExchangeAlt, FaUsers, FaBell, FaCog, FaUserTie} from "react-icons/fa";
import {RiFolderUserLine} from "react-icons/ri";
import {IoHelpBuoyOutline} from "react-icons/io5";
import {MdNotificationImportant} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="w-72 bg-white shadow-md p-6 min-h-screen">
            <h2 className="text-xl font-bold text-blue-700">LIQTRADE</h2>

            <nav className="mt-6 space-y-5">
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <RiFolderUserLine/> Tableau de Bord
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <FaExchangeAlt/> Mes Transactions
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <FaUserTie/> Mes Clients
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <IoHelpBuoyOutline/> Assistance
                </a>
            </nav>

            <div className="mt-10 pt-6 space-y-5">

                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <MdNotificationImportant/> Notifications
                </a>

                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                    <FiSettings/> Réglages
                </a>
            </div>


            <div className="mt-10 border-b py-14 flex items-center gap-4">
                <Image
                    src="/joseph.jpg"
                    alt="User profile"
                    width={70}
                    height={70}
                    priority
                    className="object-cover rounded-full w-20 h-20"/>
                <div>
                    <p className="font-semibold text-black">Paul Dumartin</p>
                    <p className="text-sm text-black">Statut Vérification KYC : <span
                        className={"text-green-500"}>Valide</span></p>
                </div>
            </div>


        </div>
    );
}

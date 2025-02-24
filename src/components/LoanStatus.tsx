import { FaCheckCircle, FaClock } from "react-icons/fa";

export default function LoanStatus() {
    return (
        <div className="bg-white  text-sm p-6 shadow rounded-md flex-1">
            <h3 className="  font-semibold mb-4">État</h3>


            <div className="flex justify-between items-center">
                <p className="text-gray-700">Prêt Société</p>
                <p className="text-green-500 font-semibold flex items-center gap-1">
                    Validé <FaCheckCircle />
                </p>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mt-1">
                <div className="h-full bg-green-500 w-full rounded-full"></div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-700">Prêt HotDoggs</p>
                <p className="text-blue-500 font-semibold flex items-center gap-1">
                    En attente <FaClock />
                </p>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mt-1">
                <div className="h-full bg-blue-500 w-2/5 rounded-full"></div>
            </div>

            <a href="#" className="text-gray-700 text-sm mt-4 block">
                Créer un nouveau dossier
            </a>
        </div>
    );
}

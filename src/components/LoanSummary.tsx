import { FaCheckCircle } from "react-icons/fa";

export default function LoanSummary() {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-1 text-center">
            <h3 className="font-semibold mb-2">Prêt Société</h3>
            <p className="text-3xl font-bold text-gray-900">39 234€</p>
            <p className="text-gray-500 text-sm">Montant du prêt en cours</p>
            <p className="text-green-500 font-semibold flex justify-center items-center gap-1 mt-2">
                Prêt validé <FaCheckCircle />
            </p>
        </div>
    );
}

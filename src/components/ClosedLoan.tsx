import { FaTrophy } from "react-icons/fa";

export default function ClosedLoan() {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-1 text-center">
            <h3 className="font-semibold">Cloturé</h3>
            <FaTrophy className="text-yellow-500 text-5xl mx-auto my-2" />
            <p className="text-gray-500 text-sm">Prêt Société</p>
            <p className="text-gray-500 text-sm">Estimation de clôture du dossier :</p>
            <p className="text-gray-900 font-semibold">13/06/2022</p>
        </div>
    );
}

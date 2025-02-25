export default function LoanConditionsTable({ data }: { data: typeof import("../../transactionData").loanConditions }) {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-1 w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
                <thead>
                <tr className="text-center text-xs sm:text-sm text-blue-900 font-semibold">
                    <th className="py-2"></th>
                    <th className="py-2">Taux d’intérêt</th>
                    <th className="py-2">Commission</th>
                    <th className="py-2">Taux Effect Global</th>
                    <th className="py-2">Date de la demande</th>
                    <th className="py-2">Date dernière échéance</th>
                    <th className="py-2">Statut de la demande</th>
                </tr>
                </thead>

                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="text-center text-xs sm:text-sm border-b">
                        <td className="py-3 text-black font-bold">{row.type}</td>
                        <td className="py-3 text-gray-600">{row.interestRate}</td>
                        <td className="py-3 text-gray-600">{row.commission}</td>
                        <td className="py-3 text-gray-600">{row.globalRate}</td>
                        <td className="py-3 text-gray-600">{row.requestDate}</td>
                        <td className="py-3 text-gray-600">{row.lastDueDate}</td>
                        <td
                            className={`py-3 font-semibold ${
                                row.status === "Validé" ? "text-green-500" : "text-gray-500"
                            }`}
                        >
                            {row.status}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

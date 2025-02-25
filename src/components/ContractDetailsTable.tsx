export default function ContractDetailsTable({ data }: { data: typeof import("../../transactionData").contractDetails }) {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-1 w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
                <thead>
                <tr className="text-center text-xs sm:text-sm text-blue-900 font-semibold">
                    <th className="py-2"></th>
                    <th className="py-2">Numéro de contrat</th>
                    <th className="py-2">Identifiant emprunteur</th>
                    <th className="py-2">Montant demandé</th>
                    <th className="py-2">Montant du prêt</th>
                    <th className="py-2">Mensualité</th>
                    <th className="py-2">Durée souhaitée</th>
                </tr>
                </thead>

                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="text-center text-xs sm:text-sm border-b">
                        <td className="py-3 text-black font-bold">{row.type}</td>
                        <td className="py-3 text-gray-600">{row.contractNumber}</td>
                        <td className="py-3 text-gray-600">{row.borrowerId}</td>
                        <td className="py-3 text-gray-600">{row.amountRequested}</td>
                        <td className="py-3 text-gray-600">{row.loanAmount}</td>
                        <td className="py-3 text-gray-600">{row.monthlyPayment}</td>
                        <td className="py-3 text-gray-600">{row.duration}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

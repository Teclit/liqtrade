export default function ContractDetailsTable({ data }: { data: typeof import("../../transactionData").contractDetails }) {
    return (
        <div className="bg-white p-6 shadow rounded-md w-full">
            <table className="w-full border-collapse">
                <thead>
                <tr className=" text-center">
                    <th className="text-sm text-blue-900 font-semibold py-2"></th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Numéro de contrat</th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Identifiant emprunteur</th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Montant demandé</th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Montant du prêt</th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Mensualité</th>
                    <th className="text-sm text-blue-900 font-semibold py-2">Durée souhaitée</th>
                </tr>
                </thead>

                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className=" text-center text-xs">
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
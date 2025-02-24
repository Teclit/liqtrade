import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "Accord ouverture", value: 30, color: "#00C49F" },
    { name: "Accord demande", value: 30, color: "#0088FE" },
    { name: "Évaluation des risques", value: 40, color: "#FF8042" },
];

export default function PendingValidation() {
    return (
        <div className="bg-white p-6 shadow rounded-md flex-1">
            <h3 className="font-semibold">En attente</h3>
            <p className="text-sm text-gray-500">Prêt HotDoggs</p>

            {/* Pie Chart */}
            <div className="flex justify-center mt-4">
                <PieChart width={120} height={120}>
                    <Pie data={data} dataKey="value" outerRadius={50} fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>

            {/* Document Information */}
            <p className="text-gray-500 text-sm mt-4">
                Pour déclencher la prochaine étape de validation, veuillez nous joindre :
            </p>
            <a href="#" className="text-blue-500 text-sm">📄 Dossier super important.pdf</a>
        </div>
    );
}

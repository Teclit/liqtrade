export default function UserCard() {
    return (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow rounded-md">
                <h3 className="font-semibold">Mon compte</h3>
                <p className="text-gray-700">Paul Dumartin</p>
                <p className="text-gray-500 text-sm">14 rue du Louvre, Paris</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h3 className="font-semibold">Segment</h3>
                <p className="text-blue-600 text-xl font-bold">RET</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h3 className="font-semibold">Évaluation des risques</h3>
                <p className="text-green-600">Risque faible</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h3 className="font-semibold">Montant dernière transaction</h3>
                <p className="text-blue-600 text-2xl font-bold">80K €</p>
            </div>
        </div>
    );
}

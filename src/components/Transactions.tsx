export default function Transactions() {
    return (
        <div className="mt-6 bg-white p-6 shadow rounded-md">
            <h3 className="font-semibold">Transactions</h3>
            <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 bg-green-200 rounded-md">Actifs</button>
                <button className="px-6 py-2 bg-yellow-200 rounded-md">En attente (1)</button>
                <button className="px-6 py-2 bg-gray-200 rounded-md">Clos</button>
            </div>
        </div>
    );
}

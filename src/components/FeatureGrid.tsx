import { FaCheckCircle, FaDollarSign, FaClock, FaLightbulb } from "react-icons/fa";

const features = [
    {
        icon: <FaCheckCircle size={40} className="text-green-500" />,
        title: "Évaluation du profil de risque de votre client",
        description:
            "Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l’acceptation rapide de votre facture.",
        bgColor: "bg-green-100",
    },
    {
        icon: <FaDollarSign size={40} className="text-purple-500" />,
        title: "Meilleur prix de cession de votre créance",
        description:
            "Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu’à 97 % de la valeur nominale de leur facture.",
        bgColor: "bg-purple-100",
    },
    {
        icon: <FaClock size={40} className="text-blue-500" />,
        title: "Paiement en un temps record pour vos factures",
        description:
            "Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Bénéficiez de nouvelles fonctionnalités de paiement instantané.",
        bgColor: "bg-blue-100",
    },
    {
        icon: <FaLightbulb size={40} className="text-orange-500" />,
        title: "Financez vos besoins de trésorerie en temps réel",
        description:
            "Faites une demande de financement en ligne via l’envoi électronique de facture et obtenez vos fonds rapidement grâce à un traitement automatisé.",
        bgColor: "bg-orange-100",
    },
];

export default function FeatureGrid() {
    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-sky-50 shadow-lg rounded-lg p-6 flex items-start space-x-4"
                >
                    <div className={`p-3 rounded-full ${feature.bgColor}`}>{feature.icon}</div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

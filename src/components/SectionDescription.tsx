import React from "react";

interface SectionDescriptionProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
                                                                   activeSection,
                                                                   setActiveSection,
                                                               }) => {
    return (
        <div
            className="sectionDescription flex flex-col lg:flex-row justify-between mx-0 mt-32 py-14 px-6 lg:px-36 bg-gray-100">
            <ul className="flex flex-col space-y-4 text-lg font-semibold ml-0 lg:ml-36">
                <li>
                    <button
                        onClick={() => setActiveSection("pret")}
                        className={`transition-all flex items-center space-x-2 ${
                            activeSection === "pret"
                                ? "text-green-500 font-bold"
                                : "text-gray-400"
                        }`}
                    >
                        <span>Prêts</span>
                        <span className="text-lg">→</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveSection("affacturage")}
                        className={`transition-all flex items-center space-x-2 ${
                            activeSection === "affacturage"
                                ? "text-green-500 font-bold"
                                : "text-gray-400"
                        }`}
                    >
                        <span>Affacturage</span>
                        <span className="text-lg">→</span>
                    </button>
                </li>
            </ul>

            <div className="flex flex-col mt-8 lg:mt-0">
                {activeSection === "pret" && (
                    <div className="mt-2 lg:ml-40">
                        <p className="text-md text-gray-700">
                            Des taux compétitifs en quelques clics. <br/>
                            Quel que soit votre projet, nous vous accompagnons de manière
                            bienveillante avec les meilleurs outils en ligne. Oubliez le
                            parcours du combattant, à vous le financement professionnel à court
                            terme. Chez Liqtrade nous vous aidons à évoluer à travers des
                            solutions de financement simples, efficaces et compétitives en
                            seulement quelques clics.
                        </p>
                        <p className="mt-4 text-gray-700 font-medium">
                            TPE/PME, comptez sur nous pour vous aider à :
                        </p>
                        <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
                            <li>Refinancer son entreprise</li>
                            <li>Ouvrir une nouvelle agence</li>
                            <li>Faire connaître son entreprise</li>
                            <li>Se lancer à l'international</li>
                            <li>Digitaliser son entreprise</li>
                            <li>Acquérir une entreprise</li>
                            <li>Transformer son entreprise</li>
                            <li>Financer des projets de développements durables</li>
                        </ul>
                        <button className="mt-6 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900 transition">
                            Vidéo de présentation
                        </button>
                    </div>
                )}

                {activeSection === "affacturage" && (
                    <div className="lg:ml-40">
                        <p className="text-md text-gray-700">
                            L'affacturage est une solution efficace pour améliorer la trésorerie
                            de votre entreprise en convertissant vos factures en liquidités
                            immédiates.
                        </p>
                        <p className="mt-4 text-gray-700 font-medium">
                            Avec LiqTrade, profitez :
                        </p>
                        <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
                            <li>D'une gestion simplifiée de vos créances</li>
                            <li>D'un financement rapide et sécurisé</li>
                            <li>De conditions flexibles et compétitives</li>
                        </ul>
                        <button className="mt-6 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900 transition">
                            En savoir plus
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectionDescription;
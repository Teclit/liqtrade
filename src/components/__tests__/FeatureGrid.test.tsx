import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeatureGrid from "@/components/FeatureGrid"; // Chemin d'import correct nécessaire

describe("FeatureGrid", () => {
    it("renders all features with correct content", () => {
        render(<FeatureGrid />);

        // Vérifier que chaque fonctionnalité (feature) est correctement affichée
        expect(
            screen.getByText("Évaluation du profil de risque de votre client")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l’acceptation rapide de votre facture."
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText("Meilleur prix de cession de votre créance")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu’à 97 % de la valeur nominale de leur facture."
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText("Paiement en un temps record pour vos factures")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Bénéficiez de nouvelles fonctionnalités de paiement instantané."
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText("Financez vos besoins de trésorerie en temps réel")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Faites une demande de financement en ligne via l’envoi électronique de facture et obtenez vos fonds rapidement grâce à un traitement automatisé."
            )
        ).toBeInTheDocument();
    });

    it("renders all icons with correct styles", () => {
        render(<FeatureGrid />);

        // Vérifie si les icônes sont bien rendues avec les styles attendus
        expect(screen.getByText("", { selector: ".text-green-500" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".text-purple-500" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".text-blue-500" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".text-orange-500" })).toBeInTheDocument();
    });

    it("renders all background colors as expected", () => {
        render(<FeatureGrid />);

        // Vérifie si chaque fonctionnalité a le bon background color
        expect(screen.getByText("", { selector: ".bg-green-100" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".bg-purple-100" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".bg-blue-100" })).toBeInTheDocument();
        expect(screen.getByText("", { selector: ".bg-orange-100" })).toBeInTheDocument();
    });
});
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContractDetailsTable from "@/components/ContractDetailsTable";

// Mock des données de table pour les tests
const mockData = [
    {
        type: "Type A",
        contractNumber: "12345",
        borrowerId: "AB-678",
        amountRequested: "10,000 €",
        loanAmount: "9,000 €",
        monthlyPayment: "200 €",
        duration: "48 mois",
    },
    {
        type: "Type B",
        contractNumber: "67890",
        borrowerId: "CD-123",
        amountRequested: "20,000 €",
        loanAmount: "18,500 €",
        monthlyPayment: "500 €",
        duration: "36 mois",
    },
];

describe("ContractDetailsTable", () => {
    it("renders the table with correct headers", () => {
        render(<ContractDetailsTable data={mockData} />);

        // Vérification des en-têtes du tableau
        expect(screen.getByText("Numéro de contrat")).toBeInTheDocument();
        expect(screen.getByText("Identifiant emprunteur")).toBeInTheDocument();
        expect(screen.getByText("Montant demandé")).toBeInTheDocument();
        expect(screen.getByText("Montant du prêt")).toBeInTheDocument();
        expect(screen.getByText("Mensualité")).toBeInTheDocument();
        expect(screen.getByText("Durée souhaitée")).toBeInTheDocument();
    });

    it("renders table rows correctly based on data", () => {
        render(<ContractDetailsTable data={mockData} />);

        // Vérification des valeurs dans les lignes de tableau
        expect(screen.getByText("Type A")).toBeInTheDocument();
        expect(screen.getByText("12345")).toBeInTheDocument();
        expect(screen.getByText("AB-678")).toBeInTheDocument();
        expect(screen.getByText("10,000 €")).toBeInTheDocument();
        expect(screen.getByText("9,000 €")).toBeInTheDocument();
        expect(screen.getByText("200 €")).toBeInTheDocument();
        expect(screen.getByText("48 mois")).toBeInTheDocument();

        expect(screen.getByText("Type B")).toBeInTheDocument();
        expect(screen.getByText("67890")).toBeInTheDocument();
        expect(screen.getByText("CD-123")).toBeInTheDocument();
        expect(screen.getByText("20,000 €")).toBeInTheDocument();
        expect(screen.getByText("18,500 €")).toBeInTheDocument();
        expect(screen.getByText("500 €")).toBeInTheDocument();
        expect(screen.getByText("36 mois")).toBeInTheDocument();
    });

    it("handles empty data correctly", () => {
        render(<ContractDetailsTable data={[]} />);

        // Vérifie qu'aucune ligne n'est affichée si les données sont vides
        expect(screen.queryByText("Type A")).not.toBeInTheDocument();
        expect(screen.queryByText("12345")).not.toBeInTheDocument();

        // Vérifie que le tableau est quand même rendu
        expect(screen.getByRole("table")).toBeInTheDocument();
    });
});
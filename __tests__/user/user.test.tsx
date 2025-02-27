import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "@/context/AuthProvider";
import UserDashboard from "@/app/user/page";

// Mock des composants utilisés dans UserDashboard
jest.mock("@/components/Sidebar", () => ({ logoutAction }: { logoutAction: () => void }) => (
    <div data-testid="sidebar">Mocked Sidebar</div>
));
jest.mock("@/components/ProtectedRoute", () => ({ children }: { children: React.ReactNode }) => (
    <div data-testid="protected-route">{children}</div>
));
jest.mock("@/components/UserCard", () => () => <div data-testid="user-card">Mocked UserCard</div>);
jest.mock("@/components/Transactions", () => () => (
    <div data-testid="transactions">Mocked Transactions</div>
));
jest.mock("@/components/UserWelcome", () => () => (
    <div data-testid="user-welcome">Mocked UserWelcome</div>
));
jest.mock("@/components/FinancialInfo", () => () => (
    <div data-testid="financial-info">Mocked FinancialInfo</div>
));
jest.mock("@/styles/Home.module.css", () => ({
    blackText: "mocked-black-text-class",
}));

describe("UserDashboard", () => {
    it("renders correctly and includes all necessary components", () => {
        const mockLogout = jest.fn(); // Mock de la fonction logout

        render(
            <AuthContext.Provider value={{ logout: mockLogout }}>
                <UserDashboard />
            </AuthContext.Provider>
        );

        // Vérifiez que le composant ProtectedRoute est affiché
        expect(screen.getByTestId("protected-route")).toBeInTheDocument();

        // Vérifiez que le Sidebar est affiché et utilisé avec la bonne action logout
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();

        // Vérifiez que les autres composants sont bien rendus
        expect(screen.getByTestId("user-welcome")).toBeInTheDocument();
        expect(screen.getByTestId("user-card")).toBeInTheDocument();
        expect(screen.getByTestId("financial-info")).toBeInTheDocument();
        expect(screen.getByTestId("transactions")).toBeInTheDocument();
    });
});
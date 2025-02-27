import { render, screen, fireEvent, within } from "@testing-library/react";
import { useRouter } from "next/navigation";
import LoginPage from "@/app/auth/login/page";

// Mock du router Next.js
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("LoginPage", () => {
    let mockPush: jest.Mock<any, any, any>;

    beforeEach(() => {
        // Simuler le comportement de useRouter
        mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        // Nettoyage du localStorage avant chaque test
        localStorage.clear();
    });

    it("Affiche les champs email et mot de passe", () => {
        render(<LoginPage />);

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument();
    });

    it("Met à jour les valeurs des champs", () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/mot de passe/i);

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        expect(emailInput.value).toBe("test@example.com");
        expect(passwordInput.value).toBe("password123");
    });

    it("Crée un nouvel utilisateur s'il n'existe pas", () => {
        render(<LoginPage />);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "newuser@example.com" } });
        fireEvent.change(screen.getByLabelText(/mot de passe/i), { target: { value: "securepassword" } });

        // Utilisation de getByRole pour cibler le bouton
        fireEvent.click(screen.getByRole("button", { name: /se connecter/i }));

        const storedUser = JSON.parse(localStorage.getItem("user"));
        const authData = JSON.parse(localStorage.getItem("authData"));

        expect(storedUser).toEqual({ email: "newuser@example.com", password: "securepassword" });
        expect(authData).toHaveProperty("token", "user-authenticated");
        expect(mockPush).toHaveBeenCalledWith("/user");
    });

    it("Connecte un utilisateur existant", () => {
        localStorage.setItem("user", JSON.stringify({ email: "test@example.com", password: "password123" }));

        render(<LoginPage />);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
        fireEvent.change(screen.getByLabelText(/mot de passe/i), { target: { value: "password123" } });

        // Utilisation de getByRole pour cibler le bouton
        fireEvent.click(screen.getByRole("button", { name: /se connecter/i }));

        expect(mockPush).toHaveBeenCalledWith("/user");
    });

    it("Affiche un message d'erreur si les identifiants sont incorrects", () => {
        jest.spyOn(window, "alert").mockImplementation(() => {});

        localStorage.setItem("user", JSON.stringify({ email: "test@example.com", password: "password123" }));

        render(<LoginPage />);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
        fireEvent.change(screen.getByLabelText(/mot de passe/i), { target: { value: "wrongpassword" } });

        // Utilisation de getByRole pour cibler le bouton
        fireEvent.click(screen.getByRole("button", { name: /se connecter/i }));

        expect(window.alert).toHaveBeenCalledWith("Identifiants incorrects !");
    });
});
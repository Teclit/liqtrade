import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "@/app/auth/login/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("LoginPage", () => {
    let mockPush: jest.Mock;

    beforeEach(() => {
        mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        // Clear localStorage before each test
        localStorage.clear();
    });

    it("renders the login form correctly", () => {
        render(<LoginPage />);

        expect(screen.getByText("Se Connecter")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Mot de passe")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Se connecter" })).toBeInTheDocument();
    });

    it("updates email and password fields on input change", () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Mot de passe");

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        expect(emailInput).toHaveValue("test@example.com");
        expect(passwordInput).toHaveValue("password123");
    });

    it("creates a new user if credentials do not exist in localStorage", () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Mot de passe");
        const loginButton = screen.getByRole("button", { name: "Se connecter" });

        // Saisir les informations utilisateur
        fireEvent.change(emailInput, { target: { value: "newuser@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "newpassword" } });

        // Simuler un clic sur le bouton de connexion
        fireEvent.click(loginButton);

        expect(localStorage.getItem("user")).toEqual(
            JSON.stringify({ email: "newuser@example.com", password: "newpassword" })
        );
        expect(localStorage.getItem("authData")).toBeTruthy(); // Un token d'authentification doit être stocké
        expect(mockPush).toHaveBeenCalledWith("/user"); // Redirection vers la page utilisateur
    });

    it("logs in an existing user with correct credentials", () => {
        // Simuler un utilisateur déjà enregistré dans le localStorage
        localStorage.setItem(
            "user",
            JSON.stringify({ email: "existinguser@example.com", password: "mypassword" })
        );

        render(<LoginPage />);

        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Mot de passe");
        const loginButton = screen.getByRole("button", { name: "Se connecter" });

        // Saisir les informations utilisateur correctes
        fireEvent.change(emailInput, { target: { value: "existinguser@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "mypassword" } });

        // Simuler un clic sur le bouton de connexion
        fireEvent.click(loginButton);

        expect(localStorage.getItem("authData")).toBeTruthy(); // Un token d'authentification doit être stocké
        expect(mockPush).toHaveBeenCalledWith("/user"); // Redirection vers la page utilisateur
    });

    it("shows an error message for incorrect credentials", () => {
        // Simuler un utilisateur déjà enregistré
        localStorage.setItem(
            "user",
            JSON.stringify({ email: "existinguser@example.com", password: "mypassword" })
        );

        render(<LoginPage />);

        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Mot de passe");
        const loginButton = screen.getByRole("button", { name: "Se connecter" });

        // Saisir des informations utilisateur erronées
        fireEvent.change(emailInput, { target: { value: "wronguser@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });

        // Espionner `window.alert` pour vérifier son appel
        const alertMock = jest.spyOn(window, "alert").mockImplementation();

        // Simuler un clic sur le bouton de connexion
        fireEvent.click(loginButton);

        expect(alertMock).toHaveBeenCalledWith("Identifiants incorrects !");
        expect(localStorage.getItem("authData")).toBeNull(); // Aucun token ne doit être stocké
        expect(mockPush).not.toHaveBeenCalled(); // Pas de redirection

        alertMock.mockRestore();
    });
});
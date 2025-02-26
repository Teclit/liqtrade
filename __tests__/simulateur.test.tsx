import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Fournit des assertions DOM personnalisées
import { usePathname } from 'next/navigation';
import SimulateurPage from '@/app/simulateur/page';

// Mock de `usePathname`
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('SimulateurPage', () => {
    beforeEach(() => {
        // Simule le chemin "/simulateur"
        (usePathname as jest.Mock).mockReturnValue('/simulateur');
    });

    afterEach(() => {
        jest.clearAllMocks(); // Réinitialise les mocks après chaque test
    });

    it('renders the Navbar component', () => {
        render(<SimulateurPage />);

        // Vérifie que le composant Navbar (navigation) est rendu
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });

    it('displays the correct page title dynamically', () => {
        render(<SimulateurPage />);

        // Vérifie que le titre contient le texte correct
        const titleElement = screen.getByText((content, element) =>
            element?.textContent === 'La page de simulateur est en construction'
        );
        expect(titleElement).toBeInTheDocument();
    });

    it('renders a button to return to the main page', () => {
        render(<SimulateurPage />);

        // Vérifie que le bouton "Retour à la page principale" est présent
        const returnButton = screen.getByRole('button', { name: /Retour à la page principale/i });
        expect(returnButton).toBeInTheDocument();

        // Vérifie que le bouton a un lien qui redirige vers "/"
        expect(returnButton.closest('a')).toHaveAttribute('href', '/');
    });

});
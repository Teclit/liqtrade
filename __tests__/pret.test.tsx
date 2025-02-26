import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Fournit des assertions DOM personnalisées
import { usePathname } from 'next/navigation';
import PretPage from '@/app/pret/page';

// Mock de `usePathname`
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('PretPage', () => {
    beforeEach(() => {
        // Simule le chemin "/pret"
        (usePathname as jest.Mock).mockReturnValue('/pret');
    });

    afterEach(() => {
        // Réinitialise les mocks après chaque test
        jest.clearAllMocks();
    });

    it('renders the Navbar component', () => {
        render(<PretPage />);

        // Vérifie que le composant Navbar (navigation) est correctement rendu
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });

    it('displays the correct page title dynamically', () => {
        render(<PretPage />);

        // Vérifie que le titre est affiché correctement
        const pageTitle = screen.getByText((content, element) =>
            element?.textContent === 'La page de pret est en construction'
        );
        expect(pageTitle).toBeInTheDocument();
    });

    it('renders the button to return to the main page', () => {
        render(<PretPage />);

        // Vérifie que le bouton "Retour à la page principale" existe
        const returnButton = screen.getByRole('button', { name: /Retour à la page principale/i });
        expect(returnButton).toBeInTheDocument();

        // Vérifie que le bouton inclut un lien pointant vers "/"
        expect(returnButton.closest('a')).toHaveAttribute('href', '/');
    });
});
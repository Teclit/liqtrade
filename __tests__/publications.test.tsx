import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Fournit des assertions DOM personnalisées
import { usePathname } from 'next/navigation';
import PublicationsPage from '@/app/publications/page';

// Mock de `usePathname`
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('PublicationsPage', () => {
    beforeEach(() => {
        // Simule le chemin "/publications"
        (usePathname as jest.Mock).mockReturnValue('/publications');
    });

    afterEach(() => {
        jest.clearAllMocks(); // Réinitialise les mocks
    });

    it('renders the Navbar component', () => {
        render(<PublicationsPage />);

        // Vérifie que le composant Navbar est rendu
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });

    it('dynamically displays the correct page title', () => {
        render(<PublicationsPage />);

        // Vérifie que le titre de la page est affiché avec le texte correct
        const pageTitle = screen.getByText((content, element) =>
            element?.textContent === 'La page de publications est en construction'
        );
        expect(pageTitle).toBeInTheDocument();
    });

    it('renders the button to return to the main page', () => {
        render(<PublicationsPage />);

        // Vérifie la présence du bouton "Retour à la page principale"
        const returnButton = screen.getByRole('button', { name: /Retour à la page principale/i });
        expect(returnButton).toBeInTheDocument();

        // Vérifie que le bouton possède un lien pointant vers "/"
        expect(returnButton.closest('a')).toHaveAttribute('href', '/');
    });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Assertions Jest pour le DOM
import { usePathname } from 'next/navigation';
import AffacturagePage from '@/app/affacturage/page';

// Mock `usePathname` pour simuler une navigation
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('AffacturagePage', () => {
    beforeEach(() => {
        // Simule le chemin actuel pour l'URL
        (usePathname as jest.Mock).mockReturnValue('/affacturage');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Navbar component', () => {
        render(<AffacturagePage />);

        // Vérifie que le composant Navbar est rendu
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });

    it('displays the correct page title', () => {
        render(<AffacturagePage />);

        // Vérifie que le titre est correct
        const pageTitle = screen.getByText((textContent, element) =>
            element?.textContent === 'La page de affacturage est en construction'
        );
        expect(pageTitle).toBeInTheDocument();
    });

    it('renders the button to return to the main page', () => {
        render(<AffacturagePage />);

        // Vérifie que le bouton "Retour à la page principale" existe
        const returnButton = screen.getByRole('button', {
            name: /Retour à la page principale/i,
        });
        expect(returnButton).toBeInTheDocument();

        // Vérifie que le bouton a bien un lien vers "/"
        expect(returnButton.closest('a')).toHaveAttribute('href', '/');
    });
});
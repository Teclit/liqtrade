import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Pour les assertions DOM
import { usePathname } from 'next/navigation';
import ContactPage from '@/app/contact/page';

// Mock de `usePathname`
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('ContactPage', () => {
    beforeEach(() => {
        // Simule le chemin "contact"
        (usePathname as jest.Mock).mockReturnValue('/contact');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Navbar component', () => {
        render(<ContactPage />);

        // Vérifie que le composant Navbar est rendu
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays the correct page title', () => {
        render(<ContactPage />);

        // Vérifie que le titre contient le texte correct
        const titleElement = screen.getByText((content, element) =>
            element?.textContent === 'La page de contact est en construction'
        );
        expect(titleElement).toBeInTheDocument();
    });

    it('renders the button to return to the main page', () => {
        render(<ContactPage />);

        // Vérifie que le bouton "Retour à la page principale" est présent
        const returnButton = screen.getByRole('button', {
            name: /Retour à la page principale/i,
        });
        expect(returnButton).toBeInTheDocument();

        // Vérifie que le bouton "Retour à la page principale" a un lien pointant vers "/"
        expect(returnButton.closest('a')).toHaveAttribute('href', '/');
    });
});
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

// Mock des composants enfants
jest.mock('@/components/navbar', () => ({
    Navbar: jest.fn(() => <nav role="navigation">Navbar</nav>),
}));
jest.mock('@/components/SectionDescription', () => ({
    __esModule: true,
    default: jest.fn(() => <div>SectionDescription Component</div>),
}));
jest.mock('@/components/FeatureGrid', () => ({
    __esModule: true,
    default: jest.fn(() => <div>FeatureGrid Component</div>),
}));
const HEADINGS = {
    H3: 'FINANCEMENT PROFESSIONNEL À COURT TERME.',
    H1: "Notre intérêt, c'est le vôtre.",
    DESCRIPTION: 'Simple, efficace et rapide. Profitez du service Liqtrade',
};

describe('Home Page', () => {
    it('renders the Navbar component', () => {
        render(<Home/>);
        // Vérifie le rendu de Navbar
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });


    /**
     * Helper function to assert that a text is in the document.
     */
    const expectTextToBeInTheDocument = (text: string) => {
        expect(screen.getByText(text)).toBeInTheDocument();
    };

    it("renders the left column content", () => {
        render(<Home/>);

        expectTextToBeInTheDocument(HEADINGS.H3);

        // Ensure there is exactly one H1 heading
        const headingElements = screen.getAllByText((_, element) =>
            element?.textContent?.includes(HEADINGS.H1) ?? false
        );
        expect(headingElements.length).toBe(5);

        expectTextToBeInTheDocument(HEADINGS.DESCRIPTION);
    });


    it('renders the action buttons with proper text and links', () => {
        render(<Home/>);

        // Vérifie le bouton "Se connecter"
        const loginButton = screen.getByRole('link', {name: 'Se connecter'});
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveAttribute('href', '/auth/login');

        // Vérifie le bouton "S'inscrire"
        const registerButton = screen.getByRole('link', {
            name: /S'inscrire/i,
        });
        expect(registerButton).toBeInTheDocument();
        expect(registerButton).toHaveAttribute('href', '/auth/register');
    });


    it("renders the right column image", () => {
        render(<Home/>);

        const image = screen.getByAltText("Image d'accueil");
        expect(image).toBeInTheDocument();

        // Ensure the image has a 'src' attribute
        expect(image).toHaveAttribute("src");

        // Decode the Next.js image URL and check if it contains "/home.png"
        const src = image.getAttribute("src");
        const decodedSrc = decodeURIComponent(src || "");

        expect(decodedSrc).toContain("/home.png");
    });


    it('renders the SectionDescription component', () => {
        render(<Home/>);

        expect(
            screen.getByText('SectionDescription Component')
        ).toBeInTheDocument();
    });

    it('renders the FeatureGrid component', () => {
        render(<Home/>);

        expect(screen.getByText('FeatureGrid Component')).toBeInTheDocument();
    });
});
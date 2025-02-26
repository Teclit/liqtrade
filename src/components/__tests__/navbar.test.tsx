import {render, screen} from '@testing-library/react';
import {Navbar} from '@/components/navbar';


jest.mock('next/navigation', () => ({
    usePathname: jest.fn(() => '/'),
}));

describe('Navbar Component', () => {
    it('renders the navbar with logo and navigation links', () => {
        render(<Navbar/>);

        // Check if the logo is present
        const logo = screen.getByAltText('LIQTRADE');
        expect(logo).toBeInTheDocument();
    });
});

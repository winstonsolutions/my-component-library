import React from 'react';
import { render, screen } from '@testing-library/react'; // Importing testing utilities
import Card from './Card'; // Importing the Card component

// Test suite for the Card component
describe('Card Component', () => {


    test('is visible', () => {
        const { container } = render(<Card title="Visible Title" content="Visible Content" />); // Rendering the Card component
        expect(container.firstChild).toBeVisible(); // Checking if the component is visible
    });

    test('changes background color when disabled', () => {
        const { container } = render(
            <Card title="Disabled Title" content="Disabled Content" disabled={true} />
        );
        
        const cardElement = container.firstChild as HTMLElement;
        expect(cardElement).toHaveStyle({ backgroundColor: '#ccc' });
    });
}); 
import React from 'react'; // Import React
import { render } from '@testing-library/react'; // Import render from testing library
import { Label } from './Label'; // Import the Label component

describe('Label Component', () => {
    // Test to check if the Label component is visible
    it('should be visible', () => {
        const { getByText } = render(<Label text="Test Label" />); // Render the Label component with text
        const labelElement = getByText(/Test Label/i); // Get the label element by its text
        expect(labelElement).toBeVisible(); // Assert that the label is visible
    });

    // Test to check if the background color changes when disabled
    it('should have a different background color when disabled', () => {
        const { getByText } = render(<Label text="Disabled Label" disabled />); // Render the Label component in disabled state
        const labelElement = getByText(/Disabled Label/i); // Get the label element by its text
        expect(labelElement).toHaveStyle('background-color: gray'); // Assert that the background color is gray (or your disabled color)
    });
}); 
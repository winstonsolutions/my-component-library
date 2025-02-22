import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

// Test that the component is visible
test('hero image component is visible', () => {
    render(
        <HeroImage 
            src="test-image.jpg"
            alt="Test Image"
        />
    );
    
    const img = screen.getByRole('img');
    expect(img).toBeVisible();
});

// Test that background color changes when disabled
test('background color changes when disabled', () => {
    render(
        <HeroImage 
            src="test-image.jpg"
            alt="Test Image"
            disabled={true}
        />
    );
    
    const img = screen.getByRole('img');
    const computedStyle = window.getComputedStyle(img);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)'); // Check for the disabled color
}); 
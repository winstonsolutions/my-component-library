import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

// Test that the component is visible
test('img component is visible', () => {
    render(
        <Img 
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
        <Img 
            src="test-image.jpg"
            alt="Test Image"
            disabled={true}
        />
    );
    
    const img = screen.getByRole('img');
    const computedStyle = window.getComputedStyle(img);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
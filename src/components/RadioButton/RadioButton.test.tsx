import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

// Test that the component is visible
test('radio button component is visible', () => {
    render(
        <RadioButton 
            label="Test Radio"
            value="test"
            checked={false}
            onChange={() => {}}
        />
    );
    
    const radioButton = screen.getByLabelText('Test Radio');
    expect(radioButton).toBeVisible();
});

// Test that background color changes when disabled
test('background color changes when disabled', () => {
    render(
        <RadioButton 
            label="Disabled Radio"
            value="disabled"
            checked={false}
            disabled={true}
            onChange={() => {}}
        />
    );
    
    const radioButton = screen.getByLabelText('Disabled Radio');
    const computedStyle = window.getComputedStyle(radioButton);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)'); // Check for the disabled color
}); 
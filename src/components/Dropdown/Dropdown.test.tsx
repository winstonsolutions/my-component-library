import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './Dropdown';


// Test that the component is visible
test('dropdown component is visible', () => {
    render(
        <Dropdown 
            options={['Option 1', 'Option 2']} 
            onSelect={() => {}} 
        />
    );
    
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeVisible();
});

// Test that background color changes when disabled
test('background color changes when disabled', () => {
    render(
        <Dropdown 
            options={['Option 1', 'Option 2']} 
            onSelect={() => {}} 
            disabled={true}
        />
    );
    
    const dropdown = screen.getByRole('combobox');
    const computedStyle = window.getComputedStyle(dropdown);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

// Test that the component is visible
test('table component is visible', () => {
    const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    const columns = ['name', 'age'];

    render(<Table data={data} columns={columns} />);

    const table = screen.getByRole('table');
    expect(table).toBeVisible();
});

// Test that background color changes when disabled
test('background color changes when disabled', () => {
    const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    const columns = ['name', 'age'];

    render(<Table data={data} columns={columns} disabled={true} />);

    const table = screen.getByRole('table');
    const computedStyle = window.getComputedStyle(table);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)'); // Check for the disabled color
}); 
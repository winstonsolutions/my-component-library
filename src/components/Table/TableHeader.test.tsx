import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('table header is visible', () => {
    render(
        <table>
            <TableHeader>
                <tr><th>Test Header</th></tr>
            </TableHeader>
        </table>
    );
    
    const header = screen.getByText('Test Header');
    expect(header).toBeVisible();
});

test('background color changes when disabled', () => {
    render(
        <table>
            <TableHeader disabled>
                <tr><th>Test Header</th></tr>
            </TableHeader>
        </table>
    );
    
    const header = screen.getByText('Test Header').parentElement?.parentElement;
    const computedStyle = window.getComputedStyle(header!);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
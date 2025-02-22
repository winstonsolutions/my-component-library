import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('table cell is visible', () => {
    render(
        <table>
            <tbody>
                <tr>
                    <TableCell>Test Cell</TableCell>
                </tr>
            </tbody>
        </table>
    );
    
    const cell = screen.getByText('Test Cell');
    expect(cell).toBeVisible();
});

test('background color changes when disabled', () => {
    render(
        <table>
            <tbody>
                <tr>
                    <TableCell disabled>Test Cell</TableCell>
                </tr>
            </tbody>
        </table>
    );
    
    const cell = screen.getByText('Test Cell');
    const computedStyle = window.getComputedStyle(cell);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
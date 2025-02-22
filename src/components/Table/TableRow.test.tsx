import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('table row is visible', () => {
    render(
        <table>
            <tbody>
                <TableRow>
                    <td>Test Row</td>
                </TableRow>
            </tbody>
        </table>
    );
    
    const row = screen.getByText('Test Row');
    expect(row).toBeVisible();
});

test('background color changes when disabled', () => {
    render(
        <table>
            <tbody>
                <TableRow disabled>
                    <td>Test Row</td>
                </TableRow>
            </tbody>
        </table>
    );
    
    const row = screen.getByText('Test Row').parentElement;
    const computedStyle = window.getComputedStyle(row!);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
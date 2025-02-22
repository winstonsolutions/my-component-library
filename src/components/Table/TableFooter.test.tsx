import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('table footer is visible', () => {
    render(
        <table>
            <TableFooter>
                <tr><td>Test Footer</td></tr>
            </TableFooter>
        </table>
    );
    
    const footer = screen.getByText('Test Footer');
    expect(footer).toBeVisible();
});

test('background color changes when disabled', () => {
    render(
        <table>
            <TableFooter disabled>
                <tr><td>Test Footer</td></tr>
            </TableFooter>
        </table>
    );
    
    const footer = screen.getByText('Test Footer').parentElement?.parentElement;
    const computedStyle = window.getComputedStyle(footer!);
    expect(computedStyle.backgroundColor).toBe('rgb(204, 204, 204)');
}); 
import React from 'react';

interface TableCellProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({ children, disabled }) => {
    return (
        <td style={{ 
            backgroundColor: disabled ? "#ccc" : "#fff",
            opacity: disabled ? 0.5 : 1 
        }}>
            {children}
        </td>
    );
};

export default TableCell; 
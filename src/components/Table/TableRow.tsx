import React from 'react';

interface TableRowProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => {
    return (
        <tr style={{ 
            backgroundColor: disabled ? "#ccc" : "#007bff",
            opacity: disabled ? 0.5 : 1 
        }}>
            {children}
        </tr>
    );
};

export default TableRow; 
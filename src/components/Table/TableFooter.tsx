import React from 'react';

interface TableFooterProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
    return (
        <tfoot style={{ 
            backgroundColor: disabled ? "#ccc" : "#007bff",
            opacity: disabled ? 0.5 : 1 
        }}>
            {children}
        </tfoot>
    );
};

export default TableFooter; 
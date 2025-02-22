import React from 'react';

interface TableHeaderProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
    return (
        <thead style={{ 
            backgroundColor: disabled ? "#ccc" : "#007bff",
            opacity: disabled ? 0.5 : 1 
        }}>
            {children}
        </thead>
    );
};

export default TableHeader; 
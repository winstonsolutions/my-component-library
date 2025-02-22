import React from 'react';

// Define the props for the Table component
interface TableProps {
    data: Array<{ [key: string]: any }>; // Array of objects representing table rows
    columns: string[]; // Array of column headers
    disabled?: boolean; // Optional prop to disable the table
}

// Create the Table component
const Table: React.FC<TableProps> = ({ data, columns, disabled }) => {
    return (
        <table style={{ backgroundColor: disabled ? "#ccc" : "#fff", opacity: disabled ? 0.5 : 1 }}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table; // Export the Table component 
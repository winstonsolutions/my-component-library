// Define the types for the Table component
export interface TableProps {
    data: Array<{ [key: string]: any }>; // Array of objects representing table rows
    columns: string[]; // Array of column headers
    disabled?: boolean; // Optional prop to disable the table
} 
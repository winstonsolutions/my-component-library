import React from 'react';

// Define the props for the Dropdown component
interface DropdownProps {
    options: string[]; // Array of options to display in the dropdown
    onSelect: (option: string) => void; // Function to call when an option is selected
    disabled?: boolean; // Optional prop to disable the dropdown
}

// Create the Dropdown component
const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, disabled }) => {
    return (
        <select 
            onChange={(e) => onSelect(e.target.value)} 
            style={{ backgroundColor: disabled ? "#ccc" : "#007bff" }} 
            disabled={disabled} // Disable the dropdown if the disabled prop is true
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown; // Export the Dropdown component 
// Define the types for the Dropdown component
export interface DropdownProps {
    options: string[]; // Array of options to display in the dropdown
    onSelect: (option: string) => void; // Function to call when an option is selected
    disabled?: boolean; // Optional prop to disable the dropdown
} 
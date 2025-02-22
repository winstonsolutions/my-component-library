// Define the types for the RadioButton component
export interface RadioButtonProps {
    label: string; // Label for the radio button
    value: string; // Value of the radio button
    checked: boolean; // Whether the radio button is checked
    disabled?: boolean; // Optional prop to disable the radio button
    onChange: (value: string) => void; // Function to call when the radio button is changed
} 
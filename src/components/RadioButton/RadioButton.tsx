import React from 'react';

// Define the props for the RadioButton component
interface RadioButtonProps {
    label: string; // Label for the radio button
    value: string; // Value of the radio button
    checked: boolean; // Whether the radio button is checked
    disabled?: boolean; // Optional prop to disable the radio button
    onChange: (value: string) => void; // Function to call when the radio button is changed
}

// Create the RadioButton component
const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, disabled, onChange }) => {
    return (
        <label style={{ display: 'block', cursor: disabled ? 'not-allowed' : 'pointer' }}>
            <input 
                type="radio" 
                value={value} 
                checked={checked} 
                onChange={() => onChange(value)} 
                disabled={disabled} 
                style={{ 
                    backgroundColor: disabled ? "#ccc" : "#007bff",
                    opacity: disabled ? 0.5 : 1
                }} 
            />
            {label}
        </label>
    );
};

export default RadioButton; // Export the RadioButton component 
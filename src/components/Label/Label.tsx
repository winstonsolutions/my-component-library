import React from 'react';
import { LabelProps } from './Label.types'; // Importing the LabelProps interface

// Main Label component
export const Label: React.FC<LabelProps> = ({ htmlFor, text, disabled }) => {
    return (
        <label htmlFor={htmlFor} style={{ backgroundColor: disabled ? 'gray' : 'transparent' }}>
            {text}
        </label>
    );
}; 
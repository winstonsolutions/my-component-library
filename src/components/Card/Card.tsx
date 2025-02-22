import React from 'react';
import './Card.css'; // Importing the CSS file for styling

// Define the Card component with a disabled prop
const Card: React.FC<{ title: string; content: string; disabled?: boolean }> = ({ title, content, disabled }) => {
    return (
        <div 
            style={{ 
                backgroundColor: disabled ? "#ccc" : "#007bff", 
                color: "pink", 
                padding: "16px", 
                borderRadius: "8px" 
            }}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};


export default Card; // Exporting the Card component 
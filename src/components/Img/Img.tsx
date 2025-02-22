import React from 'react';

// Define the props for the Img component
interface ImgProps {
    src: string;
    alt: string;
    disabled?: boolean;
}

// Create the Img component
const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
    return (
        <img 
            src={src} 
            alt={alt}
            style={{ 
                backgroundColor: disabled ? "#ccc" : "#007bff",
                opacity: disabled ? 0.5 : 1
            }}
        />
    );
};

export default Img; 
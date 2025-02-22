import React from 'react';

// Define the props for the HeroImage component
interface HeroImageProps {
    src: string; // Source URL of the image
    alt: string; // Alternative text for the image
    disabled?: boolean; // Optional prop to disable the image
}

// Create the HeroImage component
const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
    return (
        <img 
            src={src} 
            alt={alt}
            style={{ 
                backgroundColor: disabled ? "#ccc" : "#007bff",
                opacity: disabled ? 0.5 : 1,
                width: '100%', // Make the image responsive
                height: 'auto' // Maintain aspect ratio
            }}
        />
    );
};

export default HeroImage; // Export the HeroImage component 
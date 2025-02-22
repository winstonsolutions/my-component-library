import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types'; // Importing the TextProps interface

// Create the styled component with dynamic styles based on disabled prop
const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? '#999999' : '#000000')};
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'transparent')};
  padding: 8px;
  margin: 0;
`;

// Main Text component that uses the styled component
export const Text: React.FC<TextProps> = ({ children, disabled = false }) => {
  return <StyledText disabled={disabled}>{children}</StyledText>;
}; 
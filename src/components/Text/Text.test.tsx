import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './index';


describe('Text Component', () => {
  // Test to check if the component is visible
  it('should be visible when rendered', () => {
    const testText = 'Hello World';
    render(<Text>{testText}</Text>);
    
    const textElement = screen.getByText(testText);
    expect(textElement).toBeVisible();
  });

  // Test to check background color change in disabled state
  it('should have different background color when disabled', () => {
    const testText = 'Disabled Text';
    render(<Text disabled>{testText}</Text>);
    
    const textElement = screen.getByText(testText);
    expect(textElement).toHaveStyle('background-color: #f5f5f5');
  });
}); 
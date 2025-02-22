// Define the props interface for the Label component
export interface LabelProps {
  htmlFor?: string; // Optional prop to associate the label with a form element
  text: string;       // The text content of the label
  disabled?: boolean;
} 
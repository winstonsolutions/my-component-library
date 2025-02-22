import { Label } from './Label';
import { Meta, StoryObj } from "@storybook/react"; // Import necessary types from Storybook

// Define the metadata for the Label stories
const meta: Meta<typeof Label> = {
  title: "Components/Label", // Title for the story in Storybook
  component: Label, // The component being documented
  argTypes: {
    text: { control: "text" }, // Control for the text prop
    htmlFor: { control: "text" }, // Control for the htmlFor prop
    disabled: { control: "boolean" } // Control for the required prop
  }
};
export default meta; // Export the metadata

type Story = StoryObj<typeof Label>; // Define the type for the story

// Default story for the Label component
export const Default: Story = {
  args: { text: "Label Text", htmlFor: "inputId", disabled: false } // Default args for the story
};

// Required story for the Label component
export const Disabled: Story = {
  args: { text: "Disabled Label", htmlFor: "inputId", disabled: true } // Args for the required label story
};
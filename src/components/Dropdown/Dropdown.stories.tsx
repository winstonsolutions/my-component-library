import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

// Define metadata for the Dropdown component
const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        options: { control: "object" },
        disabled: { control: "boolean" }
    }
};

export default meta;

// Define the Story type
type Story = StoryObj<typeof Dropdown>;

// Define stories
export const Default: Story = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        onSelect: (option: string) => console.log(option),
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        onSelect: (option: string) => console.log(option),
        disabled: true
    }
}; 
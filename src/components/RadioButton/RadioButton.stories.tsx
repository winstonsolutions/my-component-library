import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
    title: "Components/RadioButton",
    component: RadioButton,
    argTypes: {
        label: { control: "text" },
        value: { control: "text" },
        checked: { control: "boolean" },
        disabled: { control: "boolean" }
    }
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: "Sample Radio Button",
        value: "sample",
        checked: false,
        disabled: false,
        onChange: (value: string) => console.log(value)
    }
};

export const Disabled: Story = {
    args: {
        label: "Disabled Radio Button",
        value: "disabled",
        checked: false,
        disabled: true,
        onChange: (value: string) => console.log(value)
    }
}; 
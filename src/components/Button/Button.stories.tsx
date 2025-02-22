import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { label: "Click Me", disabled: false }
};
export const Disabled: Story = {
  args: { label: "Disabled", disabled: true }
};
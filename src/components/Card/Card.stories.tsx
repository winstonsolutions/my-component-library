import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    disabled: { control: "boolean" }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Example Title",
    content: "This is an example content for the card.",
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    content: "This card is in a disabled state.",
    disabled: true
  }
};

export const LongContent: Story = {
  args: {
    title: "Long Content Example",
    content: "This is a much longer content to demonstrate how the card handles larger amounts of text. It might wrap to multiple lines and show how the card expands to accommodate more content.",
    disabled: false
  }
};
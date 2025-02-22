import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    argTypes: {
        data: { control: { type: 'object' } },
        columns: { control: { type: 'object' } },
        disabled: { control: { type: 'boolean' } }
    }
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        data: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
        columns: ['name', 'age'],
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        data: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
        columns: ['name', 'age'],
        disabled: true
    }
}; 
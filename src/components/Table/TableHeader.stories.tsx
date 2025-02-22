import { Meta, StoryObj } from "@storybook/react";
import TableHeader from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
    title: "Components/Table/TableHeader",
    component: TableHeader,
    argTypes: {
        disabled: { control: { type: 'boolean' } }
    },
    decorators: [
        (Story) => (
            <table>
                <Story />
            </table>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
    args: {
        children: <tr><th>Header 1</th><th>Header 2</th></tr>,
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        children: <tr><th>Header 1</th><th>Header 2</th></tr>,
        disabled: true
    }
}; 
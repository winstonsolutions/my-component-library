import { Meta, StoryObj } from "@storybook/react";
import TableFooter from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
    title: "Components/Table/TableFooter",
    component: TableFooter,
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

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
    args: {
        children: <tr><td colSpan={2}>Footer Content</td></tr>,
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        children: <tr><td colSpan={2}>Footer Content</td></tr>,
        disabled: true
    }
}; 
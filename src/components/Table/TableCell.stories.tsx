import { Meta, StoryObj } from "@storybook/react";
import TableCell from "./TableCell";

const meta: Meta<typeof TableCell> = {
    title: "Components/Table/TableCell",
    component: TableCell,
    argTypes: {
        disabled: { control: { type: 'boolean' } }
    },
    decorators: [
        (Story) => (
            <table>
                <tbody>
                    <tr>
                        <Story />
                    </tr>
                </tbody>
            </table>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
    args: {
        children: "Sample Cell Content",
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        children: "Sample Cell Content",
        disabled: true
    }
}; 
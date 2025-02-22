import { Meta, StoryObj } from "@storybook/react";
import TableRow from "./TableRow";

const meta: Meta<typeof TableRow> = {
    title: "Components/Table/TableRow",
    component: TableRow,
    argTypes: {
        disabled: { control: { type: 'boolean' } }
    },
    decorators: [
        (Story) => (
            <table>
                <tbody>
                    <Story />
                </tbody>
            </table>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
    args: {
        children: <>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </>,
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        children: <>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </>,
        disabled: true
    }
}; 
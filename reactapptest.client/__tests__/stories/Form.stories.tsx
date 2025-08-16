import type { Meta, StoryObj } from '@storybook/react-vite';


import Form from '../../src/components/form';

const meta = {
    title: 'Components/Form',
    component: Form.Form,
    decorators: [
        (Story) => (
            <Form.Provider>
                <Story />
            </Form.Provider>
        )
    ]
} satisfies Meta<typeof Form.Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
            </>
        )
    }
};

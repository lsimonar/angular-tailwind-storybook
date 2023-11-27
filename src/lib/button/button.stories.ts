// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Meta, moduleMetadata, StoryObj, argsToTemplate, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import Button
import { ButtonComponent, ButtonStyle } from './button.component';

// Define component

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    title: 'Button component',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [ButtonComponent],
            imports: [CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
    ],
    render: (args: ButtonComponent) => ({
        props: {
            ...args,
        },
        template: `<button-component ${argsToTemplate(args)}>Button</button-component>`,
    }),
};
export default meta;

export const PrimaryButton: StoryObj<ButtonComponent> = {
    args: {
        style: ButtonStyle.PRIMARY,
    },
};

export const SecondaryButton: StoryObj<ButtonComponent> = {
    args: {
        style: ButtonStyle.SECONDARY,
    },
};
export const OutlinedButton: StoryObj<ButtonComponent> = {
    args: {
        style: ButtonStyle.OUTLINED,
    },
};

export const TextButton: StoryObj<ButtonComponent> = {
    args: {
        style: ButtonStyle.TEXT,
    },
};

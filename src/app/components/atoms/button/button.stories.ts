// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import Button
import { ButtonComponent, ButtonStyle } from './button.component';

// Define component
export default {
    title: 'Atoms/Button',
    component: ButtonComponent,
    // Position the component to the center as otherwise we have set a global fullscreen layout to avoid default padding provided by SB6
    parameters: {
        layout: 'centered',
    },
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
            ],
            declarations: [ButtonComponent],
        }),
    ],
    // Define control types
    // You dont have to define any control types, as they are already handled by SB 6.3
} as Meta;

// Define template
// Tailwind button template
const TailwindButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<button-component [style]=style>Tailwind</button-component>`,
});
// Angular button template
const AngularButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<button-component [style]=style>Angular</button-component>`,
});
// Storybook button template
const StorybookButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<button-component [style]=style>Storybook</button-component>`,
});
// Newwwton button template
const NewwwtonButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<button-component [style]=style>Newwwton</button-component>`,
});

// Create an instances of the component
// Tailwind button
export const TailwindButton = TailwindButtonTemplate.bind({});
TailwindButton.storyName = 'Tailwind Button';
TailwindButton.args = {
    style: ButtonStyle.PRIMARY
};
// Tailwind button
export const AngularButton = AngularButtonTemplate.bind({});
AngularButton.storyName = 'Angular Button';
AngularButton.args = {
    style: ButtonStyle.SECONDARY
};
// Storybook button
export const StorybookButton = StorybookButtonTemplate.bind({});
StorybookButton.storyName = 'Storybook Button';
StorybookButton.args = {
    style: ButtonStyle.OUTLINED
};
// Newwwton button
export const NewwwtonButton = NewwwtonButtonTemplate.bind({});
NewwwtonButton.storyName = 'Newwwton Button';
NewwwtonButton.args = {
    style: ButtonStyle.TEXT
};

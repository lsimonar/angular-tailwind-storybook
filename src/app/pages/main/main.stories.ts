// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import all components used
import { ButtonComponent } from 'src/lib/button/button.component';

// Import the actual component
import { MainComponent } from './main.component';

// Define component
export default {
    title: 'Pages/Main',
    component: MainComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            // Declare all components used here including the actual component
            declarations: [ButtonComponent, MainComponent],
        }),
    ],
    // Define control types
    // No arguments for this component
} as Meta;

// Define template
const MainTemplate: Story<MainComponent> = (args: MainComponent) => ({
    props: { ...args },
    template: `<nwn-main></nwn-main>`,
});

// Create an instances of the component
export const Hero = MainTemplate.bind({});
Hero.storyName = 'Main page';

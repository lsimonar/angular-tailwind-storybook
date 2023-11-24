module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-angular-ivy'],

    framework: {
        name: '@storybook/angular',
        options: {}
    },

    docs: {
        autodocs: true
    }
};

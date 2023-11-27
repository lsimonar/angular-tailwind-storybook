// eslint-disable-next-line @typescript-eslint/no-var-requires
const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                'primary-50': '#F2FAFD',
                'primary-100': '#E9F2FF',
                'primary-200': '#B5D4FF',
                'primary-300': '#79B4FF',
                'primary-400': '#3C95FF',
                'primary-500': '#0075FF',
                'primary-600': '#0068DF',
                'primary-700': '#005BC0',
                'primary-800': '#004EA0',
                'primary-900': '#004080',
                'neutral-100': '#F7F7F7',
                'neutral-200': '#EBEBEB',
                'neutral-300': '#DDD',
                'neutral-400': '#D3D3D3',
                'neutral-500': '#C2C2C2',
                'neutral-600': '#B0B0B0',
                'neutral-700': '#717171',
                'neutral-800': '#5E5E5E',
                'neutral-black-text': '#222222',
                'black-text': '#1A1919',
                'error-50': '#FEF3F2',
                'error-100': '#FEE4E2',
                'error-200': '#FECDCA',
                'error-300': '#FDA29B',
                'error-400': '#F97066',
                'error-500': '#F04438',
                'error-600': '#D92D20',
                'error-700': '#B42318',
                'error-800': '#912018',
                'error-900': '#7A271A',
                'green-100': '#EBFAE2',
                'green-200': '#D9F0CA',
                'green-300': '#B3E494',
                'green-400': '#85D355',
                'green-500': '#68C132',
                'green-600': '#57AD23',
                'green-700': '#4F9C20',
                'warning-100': '#FEF3C7',
                'warning-500': '#F59E0B',
            },
            fontFamily: {
                inter: ['Inter, sans-serif'],
                helvetica: ['Helvetica', 'Neue'],
            },
            boxShadow: {
                'button-focus': '0 0 0 2px',
                input: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                'input-focus': '0 0 0 4px #E8F6FF, 0 1px 2px 0 rgba(16, 24, 40, 0.05)',
                'input-destructive-focus': '0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                md: '0px 1.3037036657333374px 6.518518447875977px 0px rgba(0, 0, 0, 0.02), 0px 6.162962913513184px 25.481481552124023px 0px rgba(0, 0, 0, 0.02), 0px 16px 80px 0px rgba(0, 0, 0, 0.04)',
                tooltip: '0px 2px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px #000 inset',
                card: '0px 5px 3px -2px rgba(0, 0, 0, 0.02), 0px 3px 1px -2px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
};

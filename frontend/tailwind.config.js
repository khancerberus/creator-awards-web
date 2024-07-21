/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-50': '#E9C0FA',
                'primary-100': '#E2ABF9',
                'primary-200': '#DA96F7',
                'primary-300': '#D381F5',
                'primary-400': '#CB6CF4',
                'primary-500': '#C457F2',
                'primary-600': '#B731EF',
                'primary-700': '#A612E5',
                'primary-800': '#8B0FBF',
                'primary-900': '#6F0C99',

                'primary-dark-50': '#939393',
                'primary-dark-100': '#797979',
                'primary-dark-200': '#5E5E5E',
                'primary-dark-300': '#434343',
                'primary-dark-400': '#282828',
                'primary-dark-500': '#0D0D0D',
                'primary-dark-600': '#0B0B0B',
                'primary-dark-700': '#0A0A0A',
                'primary-dark-800': '#080808',
                'primary-dark-900': '#070707',

                'secondary-50': '#e3e1fc',
                'secondary-100': '#c7c3f9',
                'secondary-200': '#aba5f6',
                'secondary-300': '#8f87f4',
                'secondary-400': '#7369f1',
                'secondary-500': '#574BEE',
                'secondary-600': '#2516e5',
                'secondary-700': '#1c10ac',
                'secondary-800': '#120b72',
                'secondary-900': '#090539'
            }
        }
    },
    plugins: []
}

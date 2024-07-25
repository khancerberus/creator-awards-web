/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'var(--primary-50)',
                    100: 'var(--primary-50)',
                    200: 'var(--primary-50)',
                    300: 'var(--primary-50)',
                    400: 'var(--primary-50)',
                    500: 'var(--primary-50)',
                    600: 'var(--primary-50)',
                    700: 'var(--primary-50)',
                    800: 'var(--primary-50)',
                    900: 'var(--primary-50)'
                },
                'primary-dark': {
                    50: 'var(--primary-dark-50)',
                    100: 'var(--primary-dark-100)',
                    200: 'var(--primary-dark-200)',
                    300: 'var(--primary-dark-300)',
                    400: 'var(--primary-dark-400)',
                    500: 'var(--primary-dark-500)',
                    600: 'var(--primary-dark-600)',
                    700: 'var(--primary-dark-700)',
                    800: 'var(--primary-dark-800)',
                    900: 'var(--primary-dark-900)'
                },
                secondary: {
                    50: 'var(--secondary-50)',
                    100: 'var(--secondary-100)',
                    200: 'var(--secondary-200)',
                    300: 'var(--secondary-300)',
                    400: 'var(--secondary-400)',
                    500: 'var(--secondary-500)',
                    600: 'var(--secondary-600)',
                    700: 'var(--secondary-700)',
                    800: 'var(--secondary-800)',
                    900: 'var(--secondary-900)'
                }
            }
        }
    },
    plugins: []
}

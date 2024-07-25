/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-50)',
                    200: 'var(--color-primary-50)',
                    300: 'var(--color-primary-50)',
                    400: 'var(--color-primary-50)',
                    500: 'var(--color-primary-50)',
                    600: 'var(--color-primary-50)',
                    700: 'var(--color-primary-50)',
                    800: 'var(--color-primary-50)',
                    900: 'var(--color-primary-50)'
                },
                'primary-dark': {
                    50: 'var(--color-primary-dark-50)',
                    100: 'var(--color-primary-dark-100)',
                    200: 'var(--color-primary-dark-200)',
                    300: 'var(--color-primary-dark-300)',
                    400: 'var(--color-primary-dark-400)',
                    500: 'var(--color-primary-dark-500)',
                    600: 'var(--color-primary-dark-600)',
                    700: 'var(--color-primary-dark-700)',
                    800: 'var(--color-primary-dark-800)',
                    900: 'var(--color-primary-dark-900)'
                },
                secondary: {
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)'
                }
            }
        }
    },
    plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neutral: {
                    900: 'var(--neutral-900)',
                },
                primary: {
                    50: 'var(--primary-50)',
                    100: 'var(--primary-100)',
                    200: 'var(--primary-200)',
                    300: 'var(--primary-300)',
                    400: 'var(--primary-400)',
                    500: 'var(--primary-500)',
                    600: 'var(--primary-600)',
                    700: 'var(--primary-700)',
                    800: 'var(--primary-800)',
                    900: 'var(--primary-900)'
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
                },
                'accent-1': {
                    50: 'var(--accent-1-50)',
                    100: 'var(--accent-1-100)',
                    200: 'var(--accent-1-200)',
                    300: 'var(--accent-1-300)',
                    400: 'var(--accent-1-400)',
                    500: 'var(--accent-1-500)',
                    600: 'var(--accent-1-600)',
                    700: 'var(--accent-1-700)',
                    800: 'var(--accent-1-800)',
                    900: 'var(--accent-1-900)'
                },
                'accent-2': {
                    50: 'var(--accent-2-50)',
                    100: 'var(--accent-2-100)',
                    200: 'var(--accent-2-200)',
                    300: 'var(--accent-2-300)',
                    400: 'var(--accent-2-400)',
                    500: 'var(--accent-2-500)',
                    600: 'var(--accent-2-600)',
                    700: 'var(--accent-2-700)',
                    800: 'var(--accent-2-800)',
                    900: 'var(--accent-2-900)'
                }
            }
        }
    },
    plugins: []
}

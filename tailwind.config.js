/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Hind Siliguri', 'sans-serif'],
            },
            colors: {
                brand: {
                    light: '#4f46e5',
                    DEFAULT: '#4338ca',
                    dark: '#3730a3',
                },
                accent: {
                    DEFAULT: '#f97316',
                    hover: '#ea580c',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

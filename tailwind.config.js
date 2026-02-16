/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2D5A27', // Dark Green
                    light: '#588157',   // Medium Green
                    sage: '#A3B18A',    // Light Sage Green
                },
                accent: {
                    DEFAULT: '#80B918', // Vibrant Green
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'Poppins', 'Open Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
        daisyui: {
            themes: [
                {
                    mytheme: {

                        "primary_text": "#F8F9FA",

                        "secondary_text": "#DEE2E6",

                        "sec": "#343A40",

                        "background": "#212529",

                        "base-100": "#6C757D",

                        "info": "#00b8ff",

                        "success": "#00a35a",

                        "warning": "#ffa000",

                        "error": "#ff0051",
                    },
                },
            ],
        },
    },
    plugins: [require("daisyui")],
}
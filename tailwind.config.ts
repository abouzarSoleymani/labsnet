import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#38894e'
                },
                secondary: {
                    DEFAULT: '#bba74c'
                },
                darkGray: '#484848',
                lightWhite: '#f8f8f8',
                lightGray: '#717171',
                footerGray: '#ededed'
            },
            fontFamily: {
                iranSans: ["var(--font-iranSans)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;

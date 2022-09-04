/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./resources/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container:{
            center:true,
            padding:"2rem"
        },

        extend: {
            fontFamily: {
                serif: "Avenir"
            },
            colors: {
                black: "#000000",
                white: "#FFFFFF",
                primary: "#00B180",
                blue: "#459EFF33",
                g1: "#EDEDED",
                g2: "#D8D8D8",
                g3: "#00000029",
                g4: "#000000B2",
                g5: "#434343"
            },
        },
    },
    plugins: [],
}

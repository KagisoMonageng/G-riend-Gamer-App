/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#2EB722",
          secondary: "#C1CAD6",
          accent: "#64DD5A",
          neutral: "#C1CAD6",
          "base-100": "#272727",
        }
      }

    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  },
}

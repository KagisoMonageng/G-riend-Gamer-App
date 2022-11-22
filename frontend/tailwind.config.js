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
          secondary: "#8EA68C",
          accent: "#64DD5A",
          neutral: "#3d4451",
          "base-100": "#1A7123",
          
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

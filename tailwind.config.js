// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




module.exports = {
  content: [
    './index.html',              // Include root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all source files inside the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
}

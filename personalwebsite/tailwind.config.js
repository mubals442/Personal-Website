/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {

    },colors:{
        background:"#272727",
        Green:"#3BF686",
        Blue:"#4CA9FF"
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'orange-30': '#F7BA50',
        'orange-40': '#F5AB2B',
        'orange-90': '#C75100',
        'orange-05': '#FDF3E1',
        'red-80': '#CC3123',
        'red-00': '#FEF5F5',
        'green-80': '#008700',
        'green-00': '#F8FFF2',
        'blue-60': '#2C75DD',
        'blue-00': '#F4FAFF',
      },
    },
  },
  plugins: [],
}


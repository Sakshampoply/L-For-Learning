/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'floating': 'floating 5s linear infinite',
      },
      keyframes: {
        "floating": {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 7px)' },
          '100%': { transform: 'translate(0, -0px)' }
        }
      },
    }
  },
  plugins: [],
}

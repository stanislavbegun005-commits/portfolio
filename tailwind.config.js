/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#070b0a',
        mint: '#7fffd4',
        emerald: '#2dd4bf',
        glow: '#56f7cc'
      },
      boxShadow: {
        glow: '0 0 40px rgba(86, 247, 204, 0.25)',
        card: '0 20px 70px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
}

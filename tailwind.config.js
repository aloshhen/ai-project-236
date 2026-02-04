export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FFFBF5',
          100: '#FFF5E6',
          200: '#FFE4CC',
          300: '#FFD4B3',
        },
        blush: {
          50: '#FFF0F3',
          100: '#FFE4EA',
          200: '#FFD1DB',
          300: '#FFB8C9',
        },
        warm: {
          100: '#FDF8F3',
          200: '#FAF0E6',
          300: '#F5E6D3',
        }
      }
    },
  },
  plugins: [],
}
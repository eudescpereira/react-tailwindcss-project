/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "https://i.pinimg.com/736x/1c/28/65/1c286567a716efb72a56609fd1e79cf6.jpg",
        'footer-texture': "https://i.pinimg.com/736x/1c/28/65/1c286567a716efb72a56609fd1e79cf6.jpg",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

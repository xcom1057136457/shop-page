module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      zIndex: {
        '-1': '-1'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1200px'
      // => @media (min-width: 1200px) { ... }
    }
  },
  variants: {
    extend: {
      block: ['hover', 'group-hover'],
      zIndex: ['hover', 'group-hover'],
      translate: ['active', 'group-hover'],
      visibility: ['hover', 'focus', 'group-hover']
    }
  },
  plugins: []
};

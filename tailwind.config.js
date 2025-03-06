module.exports = {
  content: [
    './content/**/*.erb',
    './content/**/*.md',
    './content/**/*.html',
    './content/assets/**/*.js',
    './layouts/**/*.html.erb',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '.25rem .25rem 0 0 #D4A373',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      colors: {
        'green': {
          'light': '#E6F6F2',
          'DEFAULT': '#0E8A6E',
        },
        'primary': {
          'light': '#F8F1E9',
          'DEFAULT': '#D4A373',
          'dark': '#B88A5E',
        },
        'secondary': {
          'light': '#FDF8F3',
          'DEFAULT': '#FAEDCD',
          'dark': '#F5DEB3',
        },
        'accent': {
          'light': '#F9F5EB',
          'DEFAULT': '#E9D8A6',
          'dark': '#C9B984',
        },
        'danger': {
          'light': '#FBEAE5',
          'DEFAULT': '#CF3919',
          'dark': '#A42D14',
        },
        'neutral': {
          'light': '#F9F8F6',
          'DEFAULT': '#E5E2DC',
          'dark': '#2D2A24',
        },
        'gray': {
          '100': '#F5EBE0',
          '200': '#E3D5CA',
          '300': '#D5BDAF',
          '400': '#B08968',
          '500': '#9C6644',
          '600': '#7F5539',
          '700': '#6B4F31',
          '800': '#583E29',
          '900': '#3C2A1E',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D4A373 0%, #C68B59 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #E3D5CA 0%, #D5BDAF 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

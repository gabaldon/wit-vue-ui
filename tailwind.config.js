/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  extend: {
    rotate: {
      75: '75deg'
    }
  },
  content: ['./src/components/**/*.{js,vue,ts}', './.storybook/preview.ts'],
  safelist: ['btn-primary', 'btn-dark', 'btn-secondary', 'btn-disabled'],
  theme: {
    screens: {
      lg: { max: '1600px' },
      md: { max: '1200px' },
      md2: { max: '900px' },
      sm: { max: '706px' },
      xs: { max: '350px' }
    },
    extend: {
      fontFamily: {
        title: ['Outfit', 'sans-serif']
      }
      // fontSize: {
      //   "9xl": "6.875rem",
      //   "8xl": "5.625rem",
      //   "4xl": "2.5rem",
      //   "3xl": "1.75rem"
      // }
    },
    colors: {
      white: {
        50: '#ffffff',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929'
      },
      gray: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#707070',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#262626'
      },
      black: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#232323'
      },
      'wit-blue': {
        50: '#ebfffe',
        100: '#cefffe',
        200: '#a2feff',
        300: '#63fafd',
        400: '#1cecf4',
        500: '#00e2ed',
        600: '#03a6b7',
        700: '#0a8494',
        800: '#126978',
        900: '#145765',
        950: '#063a46'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      'md-alt': '24px',
      lg: '32px',
      xl: '40px',
      '2xl': '64px',
      '3xl': '80px',
      'sm-x-screen': '15vw',
      'md-x-screen': '50vw',
      '2-md-x-screen': '70vw',
      'lg-x-screen': '90vw',
      'xl-x-screen': '100vw',
      'sm-y-screen': '15vh',
      'md-y-screen': '50vh',
      '2-md-y-screen': '70vh',
      'lg-y-screen': '90vh',
      'xl-y-screen': '100vh'
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1'
    }
  },
  plugins: []
}

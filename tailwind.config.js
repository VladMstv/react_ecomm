const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    screens: {
      print: { 'raw': 'print' },
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
      'lt-sm': { max: '559px' },
      'lt-md': { max: '959px' },
      'lt-lg': { max: '1279px' },
      'lt-xl': { max: '1339px' },
    },
    extend: {
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: "var(--color-primary)",
        },
        accent: {
          ...colors.blueGray,
          DEFAULT: colors.blueGray[800],
        },
        warn: {
          ...colors.red,
          DEFAULT: colors.red[600],
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
        },
        current: {
          DEFAULT: "var(--color-current)",
        },
        secondary: {
          ...colors.gray,
          DEFAULT: "var(--color-secondary)",
        },
        hint: {
          DEFAULT: "var(--color-hint)",
        },
        brand: {
          DEFAULT: "var(--color-brand)",
        },
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '90': '22.5rem'
      },
      /**
       * Extended spacing values for width and height utilities.
       * This way, we won't be adding these to other utilities
       * that use 'spacing' config to keep the file size
       * smaller by not generating useless utilities such as
       * p-1/4 or m-480.
       */
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '10-perc': '10%',
        '20-perc': '20%',
        '30-perc': '30%',
        '40-perc': '40%',
        '60-perc': '60%',
        '70-perc': '70%',
        '80-perc': '80%',
        '90-perc': '90%',

        // Bigger values
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '200': '50rem',
        '240': '60rem',
        '256': '64rem',
        '280': '70rem',
        '320': '80rem',
        '360': '90rem',
        '400': '100rem',
        '480': '120rem'
      },
      height: theme => ({
        ...theme('extendedSpacing')
      }),
      minHeight: theme => ({
        ...theme('spacing'),
        ...theme('extendedSpacing')
      }),
      maxHeight: theme => ({
        ...theme('extendedSpacing'),
        none: 'none'
      }),
      width: theme => ({
        ...theme('extendedSpacing')
      }),
      minWidth: theme => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
    },
  },
  variants: {
    extend: { padding: ['responsive'], backgroundOpacity: ['hover'] },

  },
  plugins: [],
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : []
};

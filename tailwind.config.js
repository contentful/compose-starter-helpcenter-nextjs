module.exports = {
  purge: ['./src/components/**/*.{js,tsx,ts}', './src/pages/**/*.{js,tsx,ts}'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
            fontSize: theme('fontSize.3xl'),
          },
          h2: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
          },
          h3: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
          },
          h4: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
          },
          h5: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
          },
          h6: {
            color: theme('colors.gray.800'),
            fontWeight: theme('fontWeight.medium'),
          },
          ul: {
            paddingLeft: theme('padding.6'),
          },
          ol: {
            paddingLeft: theme('padding.6'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};

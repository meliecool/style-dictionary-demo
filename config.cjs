module.exports = {
  source: ['input/tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/core/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            fileHeader: 'autoGeneratedHeader',
          },
        },
      ],
    },
  },
};

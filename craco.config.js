const { ESLINT_MODES, whenTest } = require('@craco/craco');

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        whenTest(() => ({
          ssr: false,
          displayName: false,
        })),
      ],
    ],
  },
};

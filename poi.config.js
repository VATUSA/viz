module.exports = {
  presets: [
    require("poi-preset-react")(), // eslint-disable-line
    require('poi-preset-resolve-alias')({ //eslint-disable-line
      './themes': 'src/semantic/dist/themes/', //eslint-disable-line
    }),
  ],
};

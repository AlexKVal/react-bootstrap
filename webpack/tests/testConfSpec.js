export default {
  path: 'webpack/test.config.js',
  cases: [
    // npm run test
    {
      argv: '',
      expected: {
        entry: undefined,
        output: { pathinfo: true },
        externals: undefined,
        module: { loaders: [ { test: /\.js/, loader: 'babel', exclude: /node_modules/ } ] },
        plugins: [ { definitions: { 'process.env': { NODE_ENV: '"development"' } } } ],
        devtool: 'eval'
      }
    }
  ]
};

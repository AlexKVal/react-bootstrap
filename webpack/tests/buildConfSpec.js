export default {
  path: 'webpack.config.js',
  cases: [
    // npm run build | `webpack --bail`
    {
      argv: '',
      expected: {
        entry: { 'react-bootstrap': './src/index.js' },
        output:
         { path: './dist',
           filename: '[name].js',
           library: 'ReactBootstrap',
           libraryTarget: 'umd' },
        externals:
         [ { react:
              { root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react' } } ],
        module: { loaders: [ { test: /\.js/, loader: 'babel', exclude: /node_modules/ } ] },
        plugins: [ { definitions: { 'process.env': { NODE_ENV: '"development"' } } } ]
      }
    },

    // npm run build | `webpack --bail -p`
    {
      argv: 'p',
      expected: {
        entry: { 'react-bootstrap': './src/index.js' },
        output:
         { path: './dist',
           filename: '[name].min.js',
           library: 'ReactBootstrap',
           libraryTarget: 'umd' },
        externals:
         [ { react:
              { root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react' } } ],
        module: { loaders: [ { test: /\.js/, loader: 'babel', exclude: /node_modules/ } ] },
        plugins: [ { definitions: { 'process.env': { NODE_ENV: '"production"' } } } ],
        devtool: 'source-map'
      }
    }
  ]
};

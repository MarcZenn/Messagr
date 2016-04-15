// Export a configuration object
module.exports = {
  // First property references the entry file. Then specify the output file.
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  // tell webpack to take .jsx file and pass them to Bable for transpiling. The way you do this is
  // with loaders.
  module: {
    loaders: [
      {
        test: /\.jsx?$/, //RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loader: 'babel-loader', // Loader to be used. Must be installed.
        exclude: /node_modules/ // exclude node modules.
      }
  ]
  }
}

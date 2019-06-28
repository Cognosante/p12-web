const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/react-app/index.js',
    'bundle.min': './src/react-app/index.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactApp',
    libraryTarget: 'umd' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};

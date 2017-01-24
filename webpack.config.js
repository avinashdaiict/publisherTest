/**
 * Created by avinashsrivastava on 1/23/17.
 */
const webpack = require('webpack');
const path = require('path');

var argv = require( 'minimist' )( process.argv.slice( 2 ) );

module.exports = {
  name: 'MySpxComponent',
  entry: {
    'MySpxComponent': argv.entry,
  },
  externals: {
    'classnames': 'classnames',
    'lodash': 'lodash',
    'react': 'React',
  },
  output: {
    path: path.join(__dirname, './dist/dist'),
    filename: 'index.js',
    publicPath: '/',
    library: 'MySpxComponent',
    libraryTarget:'commonjs2',
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [/src\/components/, /src\/PropTypes/],
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?sourceMap',
        'sass?sourceMap',
      ],
    }, {
      test: /\.(png|jpg|jpeg|gif|woff|woff2|otf)$/,
      loader: 'url-loader',
      query: {
        name: '[path][name].[ext]?[hash]',
        limit: 10000
      }
    }, {
      test: /.svg$/,
      loader: 'spr-svg-loader!raw-loader',
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(path.resolve(__dirname, './src/styles'))
    ]
  },
  plugins: [

    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"Debug"' } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};

// shared config (dev and prod)
import webpack from 'webpack';
import {resolve, join} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';


export default {
  entry: './index.js',
  output: {
    filename: '[name]-[hash:6].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        loader: 'import-glob-loader',
        enforce: "pre"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          name: 'images/[name]-[hash:4].[ext]',
          limit: 8192
        }
      },
      {
        test: /\.(woff|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name]-[hash:4].[ext]',
          limit: 8192
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: [
            autoprefixer({
              browsers: [
                'last 2 version',
                'Explorer >= 10',
                'Android >= 4'
              ]
            })
          ]
        },
        img: {
          gifsicle: {
            interlaced: false
          },
          mozjpeg: {
            progressive: true,
            arithmetic: false
          },
          optipng: false, // disabled
          pngquant: {
            floyd: 0.5,
            speed: 2
          },
          svgo: {
            plugins: [
              {
                removeTitle: true
              },
              {
                convertPathData: false
              }
            ]
          }
        }
      }
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};

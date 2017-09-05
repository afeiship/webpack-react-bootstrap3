// development config
import {resove, join} from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import {resolve} from 'path';
import commonConfig from './webpack.config.common.babel';


export default merge(commonConfig, {
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: 'Hot Module Replacement'
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by": "Fei-WEBPACK"
    }
  }
});

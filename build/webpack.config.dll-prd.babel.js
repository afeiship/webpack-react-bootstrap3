import webpack from 'webpack';
import merge from 'webpack-merge';
import dllCommonConfig from './webpack.config.dll-common.babel';


export default merge(dllCommonConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      "parallel": {
        "cache": true,
        "workers": 2
      },
      "compress": {
        "negate_iife": false,
        "unsafe_comps": true,
        "properties": true,
        "keep_fargs": false,
        "pure_getters": true,
        "collapse_vars": true,
        "unsafe": true,
        "warnings": false,
        "screw_ie8": true,
        "sequences": true,
        "dead_code": true,
        "drop_debugger": true,
        "comparisons": true,
        "conditionals": true,
        "evaluate": true,
        "booleans": true,
        "loops": true,
        "unused": true,
        "hoist_funs": true,
        "if_return": true,
        "join_vars": true,
        "cascade": true,
        "drop_console": true,
        "pure_funcs": [
          "classCallCheck",
          "invariant",
          "warning"
        ]
      },
      "output": {
        "comments": false
      }
    }),
  ]
});

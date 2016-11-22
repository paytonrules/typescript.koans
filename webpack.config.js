var path = require('path');

module.exports = {
  entry: {
    '01_intro': './test/01_intro.test.ts',
    '02_array': './test/02_array.test.ts',
    '03_collection': './test/03_collection.test.ts',
    '04_export': './test/04_export.test.ts',
    '05_queue': './test/05_queue.test.ts',
    '06_stack': './test/06_stack.test.ts',
    '07_extra': './test/07_extra.test.ts'
  },
  output: {
    filename: '[name].test.js',
    path: path.join(__dirname, 'dist/test'),

  },
  resolve: {
    extensions: ["", ".ts", ".js"],
  },
  devtool: "eval-source-map",
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};

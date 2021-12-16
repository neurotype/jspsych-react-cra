const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: "jspsych-react-cra.js",
    library: "jspsychReactCra",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
  ],
  },
  resolve: {
    extensions: ["*", '.js', '.jsx']
  },
  plugins: [new UglifyJsPlugin()],
}
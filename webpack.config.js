const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: "jspsych-react-cra.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
  plugins: [new UglifyJsPlugin()],
}
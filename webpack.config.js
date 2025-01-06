const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    // Use devMiddleware instead of contentBase
    devMiddleware: {
      publicPath: "/",
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Update path to 'public/index.html'
    }),
  ],
};

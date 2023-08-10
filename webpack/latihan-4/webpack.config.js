// import package html webpack plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// import package mini css extract plugin
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // gunakan plugin
  plugins: [
    // plugin html webpack plugin
    new HtmlWebpackPlugin({
      // arahkan pada file template html
      template: "./src/template.html",
    }),
    // plugin mini css extract plugin
    // new MiniCssExtractPlugin(),
  ],
  // sever webpack
  devServer: {
    static: {
      //nama folder bisa disesuaikan setelah __dirname
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
    // supaya jalankan live server
    liveReload: true,
  },
};

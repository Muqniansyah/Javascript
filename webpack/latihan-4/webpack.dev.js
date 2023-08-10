const path = require("path");

// import konfigurasi umum pada file webpack.config.js
const config = require("./webpack.config");
// import package webpack merge
const { merge } = require("webpack-merge");
// import package mini css extract plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// cara pakai merge
module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // untuk membersihkan file" bundle sebelumnya akan dihapus yang memiliki hash/angka pada filenya.
    clean: true,
    // untuk membuat nama file pada gambar tidak memiliki hash/angka
    assetModuleFilename: "img/[name][ext]",
  },
  plugins: [
    // plugin mini css extract plugin
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // gunakan plugin loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // html loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // file loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
});

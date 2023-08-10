const path = require("path");

// import konfigurasi umum pada file webpack.config.js
const config = require("./webpack.config");
// import package webpack merge
const { merge } = require("webpack-merge");
// import package mini css extract plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// cara pakai merge
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    // .[contenthash] tujuannya supaya setiap dibundle output filenya namanya berubah.
    filename: "main.[contenthash].js",
    // untuk membersihkan file" bundle sebelumnya akan dihapus yang memiliki hash/angka pada filenya.
    clean: true,
    // untuk membuat nama file pada gambar memiliki hash/angka
    assetModuleFilename: "img/[hash][ext]",
  },
  plugins: [
    // plugin mini css extract plugin
    new MiniCssExtractPlugin({
      // .[contenthash] tujuannya supaya setiap dibundle output filenya namanya berubah.
      filename: "main.[contenthash].css",
    }),
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

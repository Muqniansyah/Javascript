// untuk memanggil path atau alamat relatif dari folder output. (wajib diberikan saat membuat module.exports untuk konfigurasi webpack)
const path = require("path");

module.exports = {
  // mode, defaultnya yaitu production
  mode: "production",
  // entry, yaitu file entry point
  entry: "./src/index.js",
  // output
  output: {
    // path atau ingin disimpan dimana
    // path.resolve(__dirname), artinya agar relative dengan direktori kita. dan "output" untuk nama foldernya.
    path: path.resolve(__dirname, "output"),
    // filename, untuk nama filenya
    filename: "bundle.js",
  },
  // menggunakan fitur watch
  watch: true,

  // loaders
  module: {
    rules: [
      // css loader harus dihapus ketika menggunakan sass loader
      // {
      //   untuk mengecek extensi file, caranya dengan regular expression yaitu //i didalamnya berikan file jenis css lalu setelahnya berikan dolar($).
      //   test: /\.css$/i,
      //   untuk menggunakan css-loadersnya
      //   use: ["style-loader", "css-loader"],
      // },

      // babel -loader (dinonaktif karna mengalami eror)
      // {
      //   testnya untuk file mjs atau js
      //   test: /\.(?:js|mjs|cjs)$/,
      //   exclude yang berarti jika ada file javascript dinode_modules jangan ikut dibundle
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [["@babel/preset-env", { targets: "defaults" }]],
      //     },
      //   },
      // },

      // sass - loader
      {
        // testnya bisa untuk sass dan scss.
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings atau bikin tag style dan masukkan kedalam dom nya.
          "style-loader",
          // Translates CSS into CommonJS atau bundle css ke javascriptnya
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};

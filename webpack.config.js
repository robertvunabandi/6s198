const path = require("path");
const public_src = "./src/";

module.exports = {
  mode: "development",
  entry: {
    home: public_src + "Home.jsx",
    assignment_zero: public_src + "AssignmentZero.jsx",
    assignment_one: public_src + "AssignmentOne.jsx",
    assignment_two: public_src + "AssignmentTwo.jsx",
    assignment_three: public_src + "AssignmentThree.jsx",
    assignment_four: public_src + "AssignmentFour.jsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // creates style nodes from JS strings
          "style-loader",
          // translates CSS into CommonJS
          "css-loader",
          // compiles Sass to CSS, using Node Sass by default
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|txt)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // this is a hack. webpack is resolving the directory
              // path from /dist. however, when loading the image,
              // it will use whatever path was used in the name shown
              // below. for that reason, we exit out of dist, then
              // enter it anew. that now points to webpack as well
              // to load images from /dist/assets/img_name.ext
              name: "../dist/assets/[hash:16].[ext]",
            }
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  }
};
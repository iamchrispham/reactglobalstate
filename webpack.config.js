const path = require('path');
const src_dir = path.join(__dirname, './client/src');
const dist_dir = path.join(__dirname, './client/dist');

module.exports = {
  entry: `${src_dir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist_dir,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: src_dir,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        },
      },
    ]
  },
}
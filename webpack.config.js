const path = require('path')
const child = require('child_process')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    before() {
        child.spawn('npm', ['run', 'start-dev'], {
          shell: true,
          env: process.env,
          stdio: 'inherit'
        }).on('close', code => process.exit(code))
      
    }
  },
}

module.exports = config
const path = require('path')
const child = require('child_process')


const port = process.env.PORT || 3001;


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
    port: port,
    before() {
        child.spawn('NODE_ENV=dev', ['PORT='.concat(port), 'electron .', ], {
          shell: true,
          env: process.env,
          stdio: 'inherit'
        }).on('close', code => process.exit(code))
      
    }
  },
}

module.exports = config
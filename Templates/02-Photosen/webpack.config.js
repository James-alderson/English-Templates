const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function (env, argv) {
  if (argv.mode) {
    console.log(`Webpack 5, mode: ${argv.mode}`)
  }
  if (env.WEBPACK_SERVE) {
    console.log(`Webpack 5, mode: serve`)
  }

  if (argv.mode === 'development' || env.WEBPACK_SERVE) {
    return {
      entry: {
        main: './src/js/main.js',
        lazy_load: './src/js/lazy-load.js',
        fs_lightbox: './src/js/vendors/fslightbox-3.3.1/fslightbox.js',
      },
      mode: 'development',
      devtool: 'source-map',
      target: ['web', 'es5'],
      output: {
        clean: true,
        publicPath: '',
        filename: './js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Photosen',
          filename: 'index.html',
          template: './src/index.html',
          hash: true,
          chunks: ['main', 'lazy_load'],
        }),
        new HtmlWebpackPlugin({
          title: 'Photosen',
          filename: 'portrait.html',
          template: './src/portrait.html',
          hash: true,
          chunks: ['main', 'lazy_load', 'fs_lightbox'],
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: 'src/images', to: 'images' },
            { from: 'src/css/main.css', to: 'css' },
            { from: 'src/fonts', to: 'fonts' },
            { from: 'src/icons', to: 'icons' },
          ],
        }),
        new FaviconWebpackPlugin({
          logo: './src/images/favicon/favicon.png',
          mode: 'webapp',
          devMode: 'webapp',
          favicons: {
            dir: 'ltr',
            lang: 'en',
            appName: 'Photosen',
            appDescription: "Photosen photography team, Here you can see a series of the team's portfolios",
            developerName: 'James Alderson',
            developerURL: null,
            background: 'transparent',
            theme_color: '#171717',
            icons: {
              coast: false,
              yandex: false,
              windows: false,
              appleStartup: false,
            },
          },
        }),
      ],
    }
  }
  if (argv.mode === 'production') {
    return {
      entry: {
        main: './src/js/main.js',
        lazy_load: './src/js/lazy-load.js',
        fs_lightbox: './src/js/vendors/fslightbox-3.3.1/fslightbox.js',
      },
      target: ['web', 'es5'],
      output: {
        clean: true,
        publicPath: '',
        filename: './js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Photosen',
          filename: 'index.html',
          template: './src/index.html',
          hash: true,
          chunks: ['main', 'lazy_load'],
        }),
        new HtmlWebpackPlugin({
          title: 'Photosen',
          filename: 'portrait.html',
          template: './src/portrait.html',
          hash: true,
          chunks: ['main', 'lazy_load', 'fs_lightbox'],
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: 'src/images', to: 'images' },
            { from: 'src/css/main.css', to: 'css' },
            { from: 'src/fonts', to: 'fonts' },
            { from: 'src/icons', to: 'icons' },
          ],
        }),
        new FaviconWebpackPlugin({
          logo: './src/images/favicon/favicon.png',
          mode: 'webapp',
          devMode: 'webapp',
          favicons: {
            dir: 'ltr',
            lang: 'en',
            appName: 'Photosen',
            appDescription: "Photosen photography team, Here you can see a series of the team's portfolios",
            developerName: 'James Alderson',
            developerURL: null,
            background: 'transparent',
            theme_color: '#171717',
            icons: {
              coast: false,
              yandex: false,
              windows: false,
              appleStartup: false,
            },
          },
        }),
      ],
    }
  }
}

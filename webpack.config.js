const path = require('path');
const autoprefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerselPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

let isDevMode = false;

// Plugins
const plugins = () => {
  const base = [];

  base.push(
    new webpack.DefinePlugin({
      APP_NAME: "'Portfolio'",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      minify: {
        collapseWhitespace: !isDevMode,
      },
    }),
  );
  
  base.push(
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: './tsconfig.json',
        context: './',
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    })
  )

  base.push(
    new CopyPlugin({
      patterns: [
        { from: './src/assets/icons/favicon.ico', to: './' }
      ]
    })
  )

  if (!isDevMode) {
    base.push(
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
      }),
    );
  }

  return base;
};

// Loaders
const jsLoaders = [
  {
    loader: 'babel-loader',
    options: {
      outputPath: './',
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import'],
    },
  },
];

const cssLoaders = [
  'style-loader', 
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: {
        mode: 'local',
        exportLocalsConvention: "camelCase",
        localIdentName: '[local]--[hash:base64:5]',
      },
    },
  }
];

const sassLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [autoprefixer],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      additionalData: '@import "./src/assets/styles/variables.scss"; @import "./src/assets/styles/theme.scss";',
      sassOptions: {
        includePaths: [__dirname, 'src'],
      },
    },
  },
];

const imagesLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './images/',
    },
  },
];

const fontsLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './fonts/',
    },
  },
];

// Optimization
const optimization = () => {
  const config = {};

  if (!isDevMode) {
    config.minimizer = [new CssMinimizerPlugin(), new TerselPlugin()];
  } // if

  return config;
};

module.exports = (env, args) => {
  isDevMode = env.dev;

  return {
    mode: 'development',
    entry: {
      index: path.resolve(__dirname, 'src'),
    },
    devtool: isDevMode ? 'eval-cheap-module-source-map' : undefined,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `./scripts/[name].bundle.js`,
      chunkFilename: './scripts/[name].bundle.js',
      publicPath: '/',
    },
    plugins: plugins(),
    devServer: {
      static: path.resolve(__dirname, 'build'),
      historyApiFallback: true,
      compress: true,
      port: 5000,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /(node_modules)/,
          use: jsLoaders,
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'thread-loader' },
            {
              loader: 'ts-loader',
              options: {
                happyPackMode: true,
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [...cssLoaders, ...sassLoaders],
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: imagesLoaders,
        },
        {
          test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: fontsLoaders,
        },
      ],
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization: optimization(),
  };
};

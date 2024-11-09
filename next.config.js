const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // reactStrictMode: true,
  // webpack: (config) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: 'node_modules/leaflet/dist/images',
  //           to: path.resolve(__dirname, 'public', 'leaflet', 'images')
  //         },
  //       ],
  //     }),
  //   )
  //   return config
  // }
  basePath: isProd ? '/' : '',
  assetPrefix: isProd ?  '/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig;
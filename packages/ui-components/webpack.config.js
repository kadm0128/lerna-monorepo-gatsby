const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
        react: 'commonjs react',
        'styled-components': 'styled-components',
        axios: 'axios',
        uuid: 'uuid',
        'react-bootstrap': 'react-bootstrap',
        'react-lazy-load-image-component': 'react-lazy-load-image-component',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './package.json',
                    to: './',
                },
            ],
        }),
    ],
};

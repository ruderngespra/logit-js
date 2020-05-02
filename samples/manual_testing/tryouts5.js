const conf = {
    entry: ['@babel/polyfill', __dirname + '/src/start.js'],
    output: { path: __dirname, filename: 'bundle.js' },
    performance: { hints: false },
    mode: require.main == module ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                },
            },
        ],
    },
    entry1: ['@babel/polyfill', __dirname + '/src/start.js'],
    output1: { path: __dirname, filename: 'bundle.js' },
    performance1: { hints: false },
    mode1: require.main == module ? 'production' : 'development',
    module1: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                },
            },
        ],
    },
    entry11: ['@babel/polyfill', __dirname + '/src/start.js'],
    output11: { path: __dirname, filename: 'bundle.js' },
    performance11: { hints: false },
    mode11: require.main == module ? 'production' : 'development',
    module11: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                },
            },
        ],
    },
    entry111: ['@babel/polyfill', __dirname + '/src/start.js'],
    output111: { path: __dirname, filename: 'bundle.js' },
    performance111: { hints: false },
    mode111: require.main == module ? 'production' : 'development',
    module111: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                },
            },
        ],
    },
};
console.log('conf (1:6):', conf);

if (require.main == module) {
} else {
    module.exports = require('webpack-dev-middleware')({
        watchOptions: { aggregateTimeout: 300 },
        publicPath: '/',
    });
}

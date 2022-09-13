const { task, src, dest, series } = require("gulp");
const webpack = require('webpack-stream');


const toWebpack = (done) => {
    src('./src/*.ts').pipe(webpack({
        mode: 'development',
        target: 'node',
        externals: 'node_modules/**/*.js',
        output: {
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            }]
        }
    })).pipe(dest('dist'))
    done();
};


task('default', series(toWebpack))
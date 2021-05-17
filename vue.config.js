'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    devServer: {
        open: true,
        proxy: {
            '/website': {
                target: `http://127.0.0.1:8219`,
                changeOrigin: true,
                pathRewrite: {
                    '^/website': ''
                }
            },

        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}
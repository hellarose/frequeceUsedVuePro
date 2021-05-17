'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    open: true,
    devServer: {
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
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}
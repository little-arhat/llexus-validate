'use strict';
var extend = require('xtend');

var common = require('./webpack.common.dist');


module.exports = extend(common, {
    output: {
        path: './dist',
        filename: 'llexus-validate.js',
        libraryTarget: 'umd',
        library: 'LlexusValidate',
    },
});

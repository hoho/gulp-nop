/*!
 * gulp-nop, https://github.com/hoho/gulp-nop
 * (c) 2014 Marat Abdullin, MIT license
 */

'use strict';

var through = require('through');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


module.exports = function() {
    var files = [];

    function bufferContents(file) {
        if (file.isNull()) { return; }
        if (file.isStream()) { return this.emit('error', new PluginError('gulp-nop',  'Streaming not supported')); }
        files.push(file);
    }

    function endStream() {
        for (var i = 0; i < files.length; i++) {
            this.emit('data', files[i]);
        }

        this.emit('end');
    }

    return through(bufferContents, endStream);
};

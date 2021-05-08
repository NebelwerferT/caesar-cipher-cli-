const stream = require('stream');

const { replacer } = require('./replacer.js');

const transform = new stream.Transform({
    transform: function (chunk, _, callback) {
        callback(null, chunk.toString().replace(/[a-z]/gi, replacer.bind(this, this.action, this.shift)));
    }
});

module.exports.transform = transform;
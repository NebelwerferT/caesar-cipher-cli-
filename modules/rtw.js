const os = require("os");
const fs = require('fs');
const { pipeline } = require('stream');
const stream = require('stream');

const { replacer } = require('./replacer.js');

const transform = new stream.Transform({
    transform: function (chunk, _, callback) {
        callback(null, chunk.toString().replace(/[a-z]/gi, replacer.bind(this, this.action, this.shift)));
    }
});

function rtw(action, shift, inputPath, outputPath) {
    transform.action = action;
    transform.shift = +shift;
    pipeline(
        inputPath ? fs.createReadStream(inputPath, 'utf-8') : process.stdin,
        transform.once('data', function () { if (outputPath) { this.write(os.EOL); } }),
        outputPath ? fs.createWriteStream(outputPath, { 'flags': 'a' }) : process.stdout,
        (error) => {
            if (error) {
                process.stderr.write(error.message);
                process.exit(1);
            }
        }
    )
}

module.exports.rtw = rtw;
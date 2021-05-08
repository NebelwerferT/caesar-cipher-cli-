const os = require("os");
const fs = require('fs');
const { pipeline } = require('stream');
const stream = require('stream');

function replacer(action, shift, match) {
    if (action === 'encode' && shift >= 0 || action === 'decode' && shift <= 0) {
        shift = Math.abs(shift);
        if (match.toLowerCase().charCodeAt(0) + shift > 'z'.charCodeAt(0)) {
            shift = shift - 26;
        }
    }
    if (action === 'encode' && shift <= 0 || action === 'decode' && shift >= 0) {
        shift = -Math.abs(shift);
        if (match.toLowerCase().charCodeAt(0) + shift < 'a'.charCodeAt(0)) {
            shift = shift + 26;
        }
    }
    return String.fromCharCode(match.charCodeAt(0) + shift);
}

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
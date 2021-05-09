const os = require("os");
const fs = require('fs');
const { pipeline } = require('stream');

const { transform } = require('./transform.js');

function rtw(action, shift, inputPath, outputPath) {
    transform.action = action;
    transform.shift = +shift;
    pipeline(
        inputPath ? fs.createReadStream(inputPath, 'utf-8') : process.stdin,
        transform.once('data', function () { if (inputPath && outputPath) { this.write(os.EOL); } }),
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
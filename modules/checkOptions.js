const os = require('os');

function checkOptions(options) {
    let errMsgs = [];

    if (!options.action) {
        errMsgs.push("error: option '-a/--action' is required");
    }

    else if (options.action !== 'decode' && options.action !== 'encode') {
        errMsgs.push("error: option '-a/--action' can only take one of two arguments: encode or decode");
    }

    if (!options.shift) {
        errMsgs.push("error: option '-s/--shift' is required");
    }

    else if (!Number.isInteger(+options.shift)) {
        errMsgs.push("error: option '-s/--shift' can only take an integer argument");
    }

    if (errMsgs.length) {
        process.stderr.write(errMsgs.join(os.EOL));
        process.exit(1);
    }
}

module.exports.checkOptions = checkOptions;
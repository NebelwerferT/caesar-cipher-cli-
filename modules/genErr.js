const os = require('os');

function genErr(errMsgTmps) {
    let errMsgs = [];
    if (errMsgTmps.input === 'exists error' && errMsgTmps.output === 'exists error') {
        errMsgs.push('error: input and output files do not exist');
    }
    else if (errMsgTmps.input === 'exists error') {
        errMsgs.push('error: input file does not exist');
    }
    else if (errMsgTmps.output === 'exists error') {
        errMsgs.push('error: output file does not exist');
    }
    if (errMsgTmps.input === 'access error' && errMsgTmps.output === 'access error') {
        errMsgs.push('error: input and output files exist but are not accessible');
    }
    else if (errMsgTmps.input === 'access error') {
        errMsgs.push('error: input file exists but is not readable');
    }
    else if (errMsgTmps.output === 'access error') {
        errMsgs.push('error: output file exists but is not writable');
    }
    if (errMsgs.length) {
        process.stderr.write(errMsgs.join(os.EOL));
        process.exit(1);
    }
}

module.exports.genErr = genErr;
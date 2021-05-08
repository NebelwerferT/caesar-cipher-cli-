function genErr(errMsgTmps) {
    if (errMsgTmps.input === 'error' && errMsgTmps.output === 'error') {
        process.stderr.write('error: input and output files do not exist');
        process.exit(1);
    }
    if (errMsgTmps.input === 'error') {
        process.stderr.write('error: input file does not exist');
        process.exit(1);
    }
    if (errMsgTmps.output === 'error') {
        process.stderr.write('error: output file does not exist');
        process.exit(1);
    }
}

module.exports.genErr = genErr;
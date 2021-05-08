const { fileExists } = require('./fileExists.js');

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

function checkPaths(paths) {
    let errMsgTmps = {};

    for (let path in paths) {
        if (paths[path] !== undefined) {
            errMsgTmps[path] = (fileExists(paths[path]));
        }
    }
    genErr(errMsgTmps);

    return paths;
}

module.exports.checkPaths = checkPaths;

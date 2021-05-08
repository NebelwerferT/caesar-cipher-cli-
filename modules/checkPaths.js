const { fileExists } = require('./fileExists.js');
const { genErr } = require('./genErr.js');

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

const fs = require('fs');

function fileExists(path) {
    if (fs.existsSync(path)) {
        return 'succes';
    }
    else {
        return 'error';
    }

}

module.exports.fileExists = fileExists;
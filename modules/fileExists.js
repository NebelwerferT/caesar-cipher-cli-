const { existsSync, accessSync, constants } = require('fs');


function fileExists(path, ft) {
    if (!existsSync(path)) {
        return 'exists error';
    }
    else if (ft === 'input') {
        try {
            accessSync(path, constants.R_OK);
        } catch (error) {
            return 'access error';
        }
    }
    else {
        try {
            accessSync(path, constants.W_OK);
        } catch (error) {
            return 'access error';
        }
    }
    return 'success';

}

module.exports.fileExists = fileExists;
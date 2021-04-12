'use strict';

const crypto = require('crypto');

function sha1(str) {
    const hash = crypto.createHash('Sha1');
    hash.update(str);
    return hash.digest('hex');
}

function compareSha1(str, hash) {
    const strHash = sha1(str);
    return strHash === hash;
}

module.exports = {
    sha1,
    compareSha1
};

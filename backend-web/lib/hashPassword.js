var bcrypt = require('bcryptjs');

function hashPassword(string) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(string, salt);

    return hash
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hashPassword,
    comparePassword
}
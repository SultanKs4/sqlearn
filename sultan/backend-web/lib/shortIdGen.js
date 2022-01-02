const { customAlphabet } = require('nanoid')

function shortIdGen() {
    const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6)
    return nanoid()
}

module.exports = shortIdGen
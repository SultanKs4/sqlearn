const fs = require('fs')
const { promisify } = require('util')

const deleteFile = promisify(fs.unlink)

module.exports = deleteFile
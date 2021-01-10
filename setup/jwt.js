const jwt = require('jsonwebtoken')
const secret = "davidsamplersapataria2021"

module.exports = {
    sign: payload => jwt.sign(payload, secret, { expiresIn: 86400 }),
    verify: token => jwt.verify(token, secret)
}

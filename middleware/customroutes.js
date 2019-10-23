const get = require('./helpers/get')

module.exports = (req, res, next) => {
    const table = req.originalUrl.split('/').filter(c => c && c !== 'api').join('/')
    switch(table) {
        case 'login': req.method = 'LOGIN'; break
    }
    next()
}
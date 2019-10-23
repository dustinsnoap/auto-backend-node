const crypt = require('bcryptjs')
const {get} = require('../config/models')

module.exports = async (req, res, next) => {
    if(req.method === 'LOGIN') {
        if(req.body.username && req.body.password) {
            const user = await get('users', {username: req.body.username})
            if(user) {
                const legit = crypt.compareSync(req.body.password, user.password)
                if(!legit) return res.status(403).json({message: 'Thou shall use correct password next time.'})
                else req.user = user
            } else {
                return res.status(404).json({message: `User ${req.body.username} not found.`})
            }
            
        }
        else
            return res.status(403).json({message: 'Thou shall not pass without username and password.'})
    } else {
        if(req.body.hasOwnProperty('password'))
        req.body.password = crypt.hashSync(req.body.password, 1)
    }
    next()
}
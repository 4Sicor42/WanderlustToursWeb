const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            if (!req.headers.authorization) {
                return res.status(401).json({message: 'Необходимо предоставить токен авторизации'});
              }
              
            const token = req.headers.authorization.split(' ')[1] // Bearer token
            if (!token) {
                return res.status(401).json({message: "Не авторизован no key"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: e.message})
        }
    };
}




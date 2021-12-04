const jwt = require('jsonwebtoken')
const { ErrorResult } = require('../utils/result')
const User = require('../model/user')

module.exports = () => {
    return async (req, res, next) => {
        try{

            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if(authHeader == null || token == null) { res.status(402).json(new ErrorResult("Unauthorized attempt.")) }

            jwt.verify(token, process.env.TOKEN_SECRET.toString(), async(err, decode) => {
                if(err) { return res.status(402).json(new ErrorResult("Token expired.")) }

                await User.findByEmail(decode.email)
                .then(results => {
                    if(results == null) { return res.status(401).json(new Error("Unauthorized attempt.")) }
                })
            })
            next()
        }catch(exception) {
            console.log("Exception: " + exception);
        }
    }
}
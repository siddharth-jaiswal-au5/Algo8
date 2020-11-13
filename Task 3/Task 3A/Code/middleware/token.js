const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const token = req.header('employeeToken')
    if (!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token,process.env.TOKEN_Secret)
        req.employee = verified
        next()
    }catch(err){
        res.status(400).send('Invalid Token')
    }
}
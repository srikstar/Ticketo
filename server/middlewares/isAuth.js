const jwt = require('jsonwebtoken')

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) return res.status(200).json({
            message: "Unauthorized Access",
            isLogin: false
        })

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        if (!verifyToken.id) return res.status(200).json({
            message: "Unauthorized Access",
            isLogin: false
        })

        req.userID = verifyToken.id
        next()
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            isLogin: false
        })
    }
}

module.exports = isAuth
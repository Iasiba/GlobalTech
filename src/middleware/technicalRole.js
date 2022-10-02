const roleTechnicalMiddleware = async (req, res, next) => {
    console.log(req.user.id)
    const rol = req.user.rol
    if(rol === 'fef3a08d-2cec-4728-9745-7cbd2b37e557'){//technical roleId
        next()
    }else { 
        res.status(401).json({status: 'error', message: 'User not authorized to make this request'})
    }
}
exports.roleTechnicalMiddleware = roleTechnicalMiddleware
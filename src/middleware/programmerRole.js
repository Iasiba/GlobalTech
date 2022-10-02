const roleProgrammerMiddleware = async (req, res, next) => {
    console.log(req.user.id)
    const rol = req.user.rol
    if(rol === 'b9d456a0-7ace-4493-9e61-9f3efa7090e8'){//programmer roleId
        next()
    }else { 
        res.status(401).json({status: 'error', message: 'User not authorized to make this request'})
    }
}
exports.roleProgrammerMiddleware = roleProgrammerMiddleware
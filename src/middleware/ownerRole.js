const roleOwnerMiddleware = async (req, res, next) => {
    console.log(req.user.id)
    const rol = req.user.rol
    if(rol === '97006fe0-4a35-47f4-bfbf-fc962e5fe500'){//owner roleId
        next()
    }else { 
        res.status(401).json({status: 'error', message: 'User not authorized to make this request'})
    }
}
exports.roleOwnerMiddleware = roleOwnerMiddleware
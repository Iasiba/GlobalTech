const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const materialServices = require('./materials.http')


router.route('/') //* /api/v1/materials
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), materialServices.getById)
    .put(passport.authenticate('jwt', {session: false}), materialServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.remove)


exports.router = router
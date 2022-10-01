const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const materialServices = require('./materials.http')


router.route('/') //* /api/v1/materials
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), materialServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.remove)
    .put(passport.authenticate('jwt', {session: false}), materialServices.edit)


exports.router = router
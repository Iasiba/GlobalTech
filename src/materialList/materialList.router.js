const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const materialListServices = require('./materialList.http')


router.route('/') // /api/v1/materialList/
    .get(passport.authenticate('jwt', { session: false }), materialListServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), materialListServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), materialListServices.getById)
    .put(passport.authenticate('jwt', { session: false }), materialListServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), materialListServices.remove)


exports.router = router
const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const inventoryServices = require('./inventories.http')


router.route('/') //* /api/v1/inventories
    .get(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.getById)
    .put(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.remove)


exports.router = router
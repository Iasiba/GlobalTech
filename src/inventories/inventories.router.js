const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const inventoryServices = require('./inventories.http')


router.route('/') //* /api/v1/inventories
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,inventoryServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,inventoryServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,inventoryServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,inventoryServices.remove)
    .put(passport.authenticate('jwt', {session: false}),roleAdminMiddleware, inventoryServices.edit)


exports.router = router
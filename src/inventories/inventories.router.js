const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const inventoryServices = require('./inventories.http')
const materialServices = require('../materials/materials.http')

router.route('/') //* /api/v1/inventories
    .get(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.getById)
    .put(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, inventoryServices.remove)

router.route('/:id/materials')
    .get(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, materialServices.getByInventoryId)
    .post(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, materialServices.create)
    
exports.router = router
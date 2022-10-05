const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
const { roleProgrammerMiddleware } = require('../middleware/programmerRole')
require('../middleware/auth.middleware')(passport)

const AccountServices = require('./accounts.http')

router.route('/') //* /api/v1/accounts/
    .get(passport.authenticate('jwt', { session: false }),roleProgrammerMiddleware, AccountServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }),roleProgrammerMiddleware, AccountServices.getById)
    .put(passport.authenticate('jwt', { session: false }),roleProgrammerMiddleware, AccountServices.edit)
    .delete(passport.authenticate('jwt', { session: false }),roleProgrammerMiddleware, AccountServices.remove)


exports.router = router
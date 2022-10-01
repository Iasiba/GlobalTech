const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const AccountServices = require('./accounts.http')

router.route('/') //* /api/v1/projects/:projectId/accounts
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,AccountServices.getAll)
    .post(passport.authenticate('jwt', {session: false}),AccountServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), AccountServices.getById)
    .put(passport.authenticate('jwt', {session: false}), AccountServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,AccountServices.remove)


exports.router = router
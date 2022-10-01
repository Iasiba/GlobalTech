const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const pendingServices = require('./pendings.http')


router.route('/') //* /api/v1/tasks/:taskId/pendings
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,pendingServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), pendingServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), pendingServices.getById)
    .put(passport.authenticate('jwt', {session: false}), pendingServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,pendingServices.remove)


exports.router = router
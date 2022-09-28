const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const taskImageServices = require('./taskImages.http')


router.route('/') //* /api/v1/users/
    .get(passport.authenticate('jwt', {session: false}),roleAdminMiddleware,taskImageServices.getAll)
    .post(passport.authenticate('jwt', {session: false}),taskImageServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), taskImageServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), taskImageServices.remove)
    .put(passport.authenticate('jwt', {session: false}), taskImageServices.edit)


exports.router = router
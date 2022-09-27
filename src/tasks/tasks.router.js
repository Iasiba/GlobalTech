const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const taskServices = require('./tasks.http')


router.route('/') //* /api/v1/tasks      esta ruta debe de estar en projects
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), taskServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.remove)
    .put(passport.authenticate('jwt', {session: false}),taskServices.edit)


exports.router = router
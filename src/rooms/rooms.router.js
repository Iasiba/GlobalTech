const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const roomServices = require('./rooms.http')


router.route('/') //* /api/v1/project/:id/rooms/      esta ruta debe de estar en projects
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roomServices.getById)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.remove)


exports.router = router
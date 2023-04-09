const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const roomServices = require('./rooms.http')
const taskServices =require('../tasks/tasks.http')


router.route('/') //* /api/v1/project/:id/rooms/  
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.getAll)

router.route('/:roomId/tasks') // tareas de una habitacion de un projecto
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.getByRoomId)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roomServices.getById)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.remove)

exports.router = router
const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const taskServices = require('./tasks.http')
const activitiesServices = require('../activities/activities.http')


router.route('/') //* /api/v1/tasks      esta ruta debe de estar en projects
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.getAll)
    
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), taskServices.getById)
    .put(passport.authenticate('jwt', {session: false}),taskServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,taskServices.remove)

router.route('/:id/activities')
    .get(passport.authenticate('jwt', {session: false}), activitiesServices.getByTaskId)
    .post(passport.authenticate('jwt', {session: false}), activitiesServices.create)

exports.router = router
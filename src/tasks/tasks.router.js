const router = require('express').Router()
const { roleAdminMiddleware } = require('../middleware/adminRole')
const { upload } = require('../utils/multer')
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const taskServices = require('./tasks.http')
const activitiesServices = require('../activities/activities.http')
const taskImageServices = require('../taskImages/taskImages.http')


router.route('/') //* /api/v1/tasks      esta ruta debe de estar en projects
    .get(passport.authenticate('jwt', {session: false}),/* roleAdminMiddleware,*/taskServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), taskServices.getById)
    .put(passport.authenticate('jwt', {session: false}),taskServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), /*roleAdminMiddleware,*/taskServices.remove)

router.route('/:id/activities')
    .get(passport.authenticate('jwt', {session: false}), activitiesServices.getByTaskId)
    .post(passport.authenticate('jwt', {session: false}), activitiesServices.create)

router.route('/:id/taskImages') 
    .get(passport.authenticate('jwt', {session: false}),taskImageServices.getBytaskId)
    .post(passport.authenticate('jwt', {session: false}),upload().single('taskImage'),taskImageServices.create)

exports.router = router
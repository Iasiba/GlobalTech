const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const activitiesServices = require('./activities.http')


router.route('/') //* /api/v1/activities
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,activitiesServices.getAll)
    
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), activitiesServices.getById)
    .put(passport.authenticate('jwt', {session: false}), activitiesServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,activitiesServices.remove)


exports.router = router
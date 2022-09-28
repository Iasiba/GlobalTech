const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const projectServices = require('./projects.http')


router.route('/') //* /api/v1/projects
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, projectServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.remove)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.edit)


exports.router = router
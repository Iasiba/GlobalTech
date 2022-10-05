const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const projectServices = require('./projects.http')
const AccountServices =require("../accounts/accounts.http")
const roomServices = require("../rooms/rooms.http")

router.route('/') //* /api/v1/projects
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), projectServices.getById)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,projectServices.remove)

router.route('/:id/accounts') //cuentas
    .get(passport.authenticate('jwt', { session: false }), AccountServices.getByProjectId)
    .post(passport.authenticate('jwt', { session: false }), AccountServices.create)

router.route('/:id/rooms') //* /api/v1/projects/:id/rooms/
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.getByProjectId)
    .post(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,roomServices.create)

exports.router = router
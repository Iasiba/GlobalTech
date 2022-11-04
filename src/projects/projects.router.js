const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const projectServices = require('./projects.http')
const AccountServices =require("../accounts/accounts.http")
const roomServices = require("../rooms/rooms.http")
const materialServices=require("../materials/materials.http")
const backupServices=require("../backups/backup.http")
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

router.route('/:id/materials')//* /api/v1/projects/:id/materials/
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,materialServices.getByProjectId)

router.route('/:id/backups')//* /api/v1/projects/:id/materials/
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware,backupServices.getByProjectId)
  
exports.router = router
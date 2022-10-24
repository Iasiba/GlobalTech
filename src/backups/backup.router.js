const router = require('express').Router()
const passport = require('passport')
const { roleProgrammerMiddleware } = require('../middleware/programmerRole')
require('../middleware/auth.middleware')(passport)

const backupServices = require('./backup.http')


router.route('/') // /api/v1/backup/
    .get(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware,backupServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware,backupServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware,backupServices.getById)
    .put(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware,backupServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware,backupServices.remove)


exports.router = router
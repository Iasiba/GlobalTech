const router = require('express').Router()
const passport = require('passport')
const { roleProgrammerMiddleware } = require('../middleware/programmerRole')
require('../middleware/auth.middleware')(passport)

const programmingServices = require('./programming.http')


router.route('/') // /api/v1/programing/
    .get(passport.authenticate('jwt', {session: false}), roleProgrammerMiddleware,programmingServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleProgrammerMiddleware,programmingServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roleProgrammerMiddleware,programmingServices.getById)
    .put(passport.authenticate('jwt', {session: false}), roleProgrammerMiddleware ,programmingServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), roleProgrammerMiddleware,programmingServices.remove)


exports.router = router
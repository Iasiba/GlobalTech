const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const taskListServices = require('./taskList.http')

router.route('/') // /api/v1/materialList/
    .get(passport.authenticate('jwt', { session: false }), taskListServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), taskListServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), taskListServices.getById)
    .put(passport.authenticate('jwt', { session: false }), taskListServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), taskListServices.remove)
router.route('/me/:userId')
    .get(passport.authenticate('jwt', { session: false }), taskListServices.getByUserId)

exports.router = router
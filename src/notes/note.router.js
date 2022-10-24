const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const noteServices = require('./note.http')


router.route('/') // /api/v1/notes/
    .get(passport.authenticate('jwt', { session: false }), noteServices.getAll)
    .post(passport.authenticate('jwt', { session: false }), noteServices.create)
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), noteServices.getById)
    .put(passport.authenticate('jwt', { session: false }), noteServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), noteServices.remove)


exports.router = router
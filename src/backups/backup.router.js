const router = require('express').Router()
const passport = require('passport')
const { roleProgrammerMiddleware } = require('../middleware/programmerRole')
const { upload } = require('../utils/multer')
require('../middleware/auth.middleware')(passport)

const backupServices = require('./backup.http')


router.route('/') // /api/v1/backups/
    .get(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware, backupServices.getAll)
    //.post(passport.authenticate('jwt', { session: false }),roleProgrammerMiddleware,backupServices.create)
    .post(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware, backupServices.create)
/*
.post(
    passport.authenticate('jwt', { session: false }), 
    upload().single('profile_img'), 
    userServices.postProfileImg
)
*/
router.route('/:id')
    .post(passport.authenticate('jwt', { session: false }), upload().single('backups'), roleProgrammerMiddleware, backupServices.upload)
    .get(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware, backupServices.getById)
    .put(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware, backupServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), roleProgrammerMiddleware, backupServices.remove)


exports.router = router
const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
const { upload } = require('../utils/multer')
require('../middleware/auth.middleware')(passport)
const taskServices = require("../tasks/tasks.http")
const userServices = require('./users.http')
const activityServices = require("../activities/activities.http")
const noteServices = require("../notes/note.http")
const materialServices = require("../materials/materials.http")


router.route('/') //* /api/v1/users/
    .get(passport.authenticate('jwt', { session: false }),/* roleAdminMiddleware,*/ userServices.getAll)

router.route('/me')
    .get(passport.authenticate('jwt', { session: false }), userServices.getMyUser)
    .put(passport.authenticate('jwt', { session: false }), userServices.editMyUser)
    .delete(passport.authenticate('jwt', { session: false }), userServices.removeMyUser)

router.route('/me/tasks')
    .get(passport.authenticate('jwt', { session: false }), taskServices.getByUser)

router.route('/me/activities')
    .get(passport.authenticate('jwt', { session: false }), activityServices.getByUserId)

router.route('/me/notes')
    .get(passport.authenticate('jwt', { session: false }), noteServices.getByUserId)
    
router.route('/me/materials')
    .get(passport.authenticate('jwt', { session: false }), materialServices.getByUserId)

router.route('/me/profile-img')
    .post(passport.authenticate('jwt', { session: false }), upload().single('profile_img'), userServices.postProfileImg)
    /*  .post(
            passport.authenticate('jwt', {session: false}), 
            upload.single('profile_img'), 
            userServices.postProfileImg
        )
    */
router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), userServices.getById)
    .put(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, userServices.edit)
    .delete(passport.authenticate('jwt', { session: false }), roleAdminMiddleware, userServices.remove)
exports.router = router
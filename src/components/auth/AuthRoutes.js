const router = require('express').Router();
const AuthController = require('./AuthController');
const authUtil = require('../../utils/Auth')

router.post('/signupUser',AuthController.signupUser)
router.post('/signinUser',AuthController.signinUser)
router.post('/currentUser',authUtil.auth,AuthController.currentUser)



module.exports = router;
const controller = require('../controllers/user');
const router = require('express').Router();

router.patch('/:id', controller.updateUser); //works
router.patch('/name/:name', controller.updateUsername); //works
router.patch('/password/:name', controller.updatePassword); //works
router.patch('/avatar/:name', controller.updateAvatar);
router.post('/signup', controller.createUser); //works
router.delete('/:id', controller.deleteUser); //works
router.get('/routines/:name', controller.getUserRoutines); //works
router.get('/login/:name/:password', controller.login); //works


module.exports = router;
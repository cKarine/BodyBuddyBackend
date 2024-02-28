const controller = require('../controllers/routines');
const router = require('express').Router();

router.post('/', controller.createRoutine); //works
router.patch('/:id', controller.updateRoutine); //works
router.delete('/:id', controller.deleteRoutine); //works
router.get('/:page', controller.getAllRoutines); //works
router.get('/exercises/:id', controller.getRoutineExercises); //works
router.get('/', controller.getHardestRoutine);


module.exports = router;
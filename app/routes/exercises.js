const controller = require('../controllers/exercises');
const router = require('express').Router();

router.get('/:page', controller.getAllExercises); //works
router.post('/', controller.createExercise); //works
router.delete('/:id', controller.deleteExercise); //works
router.patch('/:id', controller.updateExercise); //works

module.exports = router;
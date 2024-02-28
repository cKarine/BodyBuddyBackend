const {
    createExercise,
    getAllExercises,
    deleteExercise,
    updateExercise
} = require('../services/exercises')

module.exports = {

    createExercise: async (req, res) => {
        try {
            const exercises = req.body
            const newExercise = await createExercise(exercises)
            res.json(newExercise)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    getAllExercises: async (req, res) => {
        try {
            const {
                page
            } = req.params
            const exercises = await getAllExercises(page)
            res.json(exercises)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    deleteExercise: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const deletedExercise = await deleteExercise(id)
            res.json(deletedExercise)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updateExercise: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const newExercise = req.body

            const updatedExercise = await updateExercise(id, newExercise)
            res.json(updatedExercise)
        } catch (err) {
            res.status(500).send(err)
        }
    }

}
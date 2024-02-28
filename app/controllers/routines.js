const {
    createRoutine,
    updateRoutine,
    deleteRoutine,
    getAllRoutines,
    getRoutineExercises,
    getHardestRoutine
} = require("../services/routines");

module.exports = {

    createRoutine: async (req, res) => {
        try {
            const {
                name,
                description,
                username,
                exercises
            } = req.body
            const newRoutine = await createRoutine(name, description, username, exercises)
            res.json(newRoutine)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updateRoutine: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const newRoutine = req.body

            const updatedRoutine = await updateRoutine(id, newRoutine)
            res.json(updatedRoutine)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    deleteRoutine: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const deletedRoutine = await deleteRoutine(id)
            res.json(deletedRoutine)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    getAllRoutines: async (req, res) => {
        try {
            const {
                page
            } = req.params
            const routines = await getAllRoutines(page)
            res.json(routines)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    getRoutineExercises: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const exercises = await getRoutineExercises(id)
            res.json(exercises)
        } catch (err) {

            console.log(err)
            res.status(500).send(err)
        }
    },

    getHardestRoutine: async (req, res) => {
        try {
            const hardestRoutine = await getHardestRoutine()
            res.json(hardestRoutine)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}
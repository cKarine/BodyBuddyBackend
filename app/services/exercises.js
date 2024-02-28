const Exercise = require("../models/exercises");
const Routine = require("../models/routines");

module.exports = {
    createExercise: async (exercises) => {
        if (!(exercises instanceof Array)) exercises = [exercises];

        const newExercises = await Exercise.insertMany(exercises);
        return newExercises;

    },

    getAllExercises: async (page) => {
        const pageSize = 10;
        const skip = (page - 1) * pageSize;
        const exercises = await Exercise.find().skip(skip).limit(pageSize);
        return exercises;
    },

    deleteExercise: async (exerciseId) => {
        const deletedExercise = await Exercise.findByIdAndDelete(exerciseId);
        Routine.find({
            exercises: exerciseId
        }).then(routines => {
            routines.forEach(routine => {
                routine.exercises = routine.exercises.filter(exercise => exercise != exerciseId);
                routine.save();
            });
        });
        return deletedExercise;
    },

    updateExercise: async (id, newExercise) => {
        const exercise = await Exercise.updateOne({
            _id: id
        }, newExercise);
        return exercise;

    }

}
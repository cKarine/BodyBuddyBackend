const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const exercisesSchema = new Schema({
    name: String,
    description: String,
    image: String,
    link: String,
    difficulty: Number
});

const Exercises = model('Exercises', exercisesSchema);
module.exports = Exercises;
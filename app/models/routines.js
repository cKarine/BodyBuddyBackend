const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const routinesSchema = new Schema({
    name: String,
    description: String,
    username: {
        type: String,
        ref: 'User'
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercises'
    }],
    difficulty: Number

});

const Routines = model('Routines', routinesSchema);
module.exports = Routines;
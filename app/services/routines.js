const Routines = require("../models/routines");
const {
    ObjectId
} = require('mongoose').Types;


module.exports = {

    createRoutine: async (name, description, username, exercises) => {
        const newRoutine = new Routines({
            name,
            description,
            username,
            exercises
        });
        return newRoutine.save();
    },

    updateRoutine: async (id, newRoutine) => {
        const routine = await Routines.updateOne({
            _id: id
        }, newRoutine);
        return routine;

    },

    deleteRoutine: async (id) => {
        const deletedRoutine = await Routines.findByIdAndDelete(id);
        return deletedRoutine;
    },

    getAllRoutines: async (page) => {
        const pageSize = 10;
        const skip = (page - 1) * pageSize;
        const routines = await Routines.find().skip(skip).limit(pageSize);
        return routines;
    },

    getRoutineExercises: async (id) => {
        const res = await Routines.aggregate([{
            '$match': {
                '_id': new ObjectId(id)
            }
        }, {
            '$unwind': {
                'path': '$exercises',
                'preserveNullAndEmptyArrays': false
            }
        }, {
            '$lookup': {
                'from': 'exercises',
                'localField': 'exercises',
                'foreignField': '_id',
                'as': 'exercisesFull'
            },
        }, {
            '$project': {
                'exercisesFull': 1,
                '_id': 0
            }
        }]);

        return res;
    },

    getHardestRoutine: async () => {
        const res = await Routines.aggregate([{
                '$unwind': {
                    'path': '$exercises',
                    'preserveNullAndEmptyArrays': false
                }
            },
            {
                '$lookup': {
                    'from': 'exercises',
                    'localField': 'exercises',
                    'foreignField': '_id',
                    'as': 'exercisesFull'
                }
            },
            {
                '$project': {
                    'exercisesFull.difficulty': 1,
                    'name': 1
                }
            },
            {
                '$unwind': {
                    'path': '$exercisesFull',
                    'preserveNullAndEmptyArrays': false
                }
            },
            {
                '$group': {
                    '_id': '$_id',
                    'name': {
                        '$first': '$name'
                    },
                    'difficulty': {
                        '$sum': '$exercisesFull.difficulty'
                    }
                }
            },
            {
                '$sort': {
                    'difficulty': -1
                }
            },
            {
                '$limit': 1
            },

        ]);


        return res;
    }
}
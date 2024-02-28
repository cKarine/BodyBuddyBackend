const User = require("../models/user");
const Exercises = require("../models/exercises");
const Routines = require("../models/routines");

module.exports = {


    createUser: async (name, password, avatar) => {
        const user = await User.find({
            name: name
        });
        if (user.length === 0) {
            const newUser = new User({
                name,
                password,
                avatar
            });

            return newUser.save();
        } else {
            return "User already exists";
        }
    },

    updateUser: async (id, newUser) => {
        const user = await User.updateOne({
            _id: id
        }, newUser);
        return user;

    },

    deleteUser: async (id) => {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    },

    getUserRoutines: async (name) => {
        const routines = await Routines.find({
            username: name
        });
        return routines;
    },

    login: async (name, password) => {
        const user = await User
            .findOne({
                name,
                password
            });
        return user;
    },


    updateUsername: async (name, newName) => {
        const updatedUser = await User.updateOne({
            name: name
        }, newName);

        return updatedUser;
    },

    updatePassword: async (name, newPassword) => {
        const updatedUser = await User.updateOne({
            name: name
        }, newPassword);
        return updatedUser;
    },

    updateAvatar: async (name, newAvatar) => {
        const updatedUser = await User.updateOne({
            name: name
        }, newAvatar);
        return updatedUser;
    }



}
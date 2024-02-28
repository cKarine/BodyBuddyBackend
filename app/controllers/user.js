const {
    createUser,
    updateUser,
    deleteUser,
    getUserRoutines,
    login,
    updateUsername,
    updatePassword,
    updateAvatar
} = require('../services/user')

module.exports = {

    createUser: async (req, res) => {
        try {
            const {
                name,
                password,
                avatar
            } = req.body
            const newUser = await createUser(name, password, avatar)
            res.json(newUser)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updateUser: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const newUser = req.body

            const updatedUser = await updateUser(id, newUser)
            res.json(updatedUser)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const deletedUser = await deleteUser(id)
            res.json(deletedUser)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    getUserRoutines: async (req, res) => {
        try {
            const {
                name
            } = req.params
            const routines = await getUserRoutines(name)
            res.json(routines)
        } catch (err) {
            res.status(500).send(err)
        }

    },

    login: async (req, res) => {
        try {
            const {
                name,
                password
            } = req.params
            const user = await login(name, password)
            res.json(user)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updateUsername: async (req, res) => {
        try {
            const {
                name
            } = req.params
            const newUser = req.body

            const updatedUsername = await updateUsername(name, newUser)
            res.json(updatedUsername)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updatePassword: async (req, res) => {
        try {
            const {
                name
            } = req.params
            const newPassword = req.body

            const updatedPassword = await updatePassword(name, newPassword)
            res.json(updatedPassword)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    updateAvatar: async (req, res) => {
        try {
            const {
                name
            } = req.params
            const newAvatar = req.body

            const updatedAvatar = await updateAvatar(name, newAvatar)
            res.json(updatedAvatar)
        } catch (err) {
            res.status(500).send(err)
        }
    }
};
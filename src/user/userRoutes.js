const { Router } = require('express');
const { createUser, readUsers, updateUser, deleteUser} = require('./userControllers')

const userRouter = Router()

userRouter.post("/createUser", createUser)
userRouter.get("/readUser", readUsers)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser/:username", deleteUser)

module.exports = userRouter
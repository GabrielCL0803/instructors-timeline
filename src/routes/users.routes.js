const {Router} = require("express")
const UserController = require("../controllers/UserController")

const checkUserExists = require("../middlewares/checkUserExists")


const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/user", userController.createUser)
userRoutes.get("/user", userController.listUser)
userRoutes.get("/user/:user_id",checkUserExists, userController.listUserById)

userRoutes.put("/user/:user_id", checkUserExists, userController.updateUser)
userRoutes.patch("/user/:user_id", checkUserExists, userController.updateUserAdmin)
userRoutes.delete("/user/:user_id", checkUserExists, userController.deleteUser)

module.exports = userRoutes
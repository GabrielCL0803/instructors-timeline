const {Router} = require("express")
const TaskController = require("../controllers/TaskController")

const checkTaskExists = require("../middlewares/checkTaskExists")
const checkUserExists = require("../middlewares/checkUserExists")

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.post("/tasks/:user_id",checkUserExists, taskController.createTask)
taskRoutes.get("/tasks", taskController.listTask)
taskRoutes.get("/tasks/:id", checkTaskExists, taskController.listTaskById)
taskRoutes.patch("/tasks/:id", checkTaskExists, taskController.updateTask)
taskRoutes.delete("/tasks/:id", checkTaskExists, taskController.deleteTask)

module.exports = taskRoutes

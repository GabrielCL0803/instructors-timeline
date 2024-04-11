const {Router} = require("express")
const SessionCrontroller = require("../controllers/SessionController")

const sessionController = new SessionCrontroller()
const sessionRoutes = Router()

sessionRoutes.post("/login", sessionController.admCreate)

module.exports = sessionRoutes
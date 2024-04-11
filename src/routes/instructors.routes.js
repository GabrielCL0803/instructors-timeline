const {Router} = require("express")

const InstructorController = require("../controllers/InstructorController")
const checkAdmExist = require("../middlewares/checkAdmExists")
const checkInstructorExist = require("../middlewares/checkInstructorExists")

const instructorRoutes = Router()
const instructorController = new InstructorController()

instructorRoutes.post("/instructors/:adm_id",checkAdmExist, instructorController.createInstructor)
instructorRoutes.get("/instructors", instructorController.listInstructor)
instructorRoutes.get("/instructors/:instructor_id",checkInstructorExist, instructorController.listInstructorById)
instructorRoutes.patch("/instructors/:instructor_id", checkInstructorExist, instructorController.updateInstructor)
instructorRoutes.delete("/instructors/:instructor_id", checkInstructorExist, instructorController.deleteInstructor)

module.exports = instructorRoutes
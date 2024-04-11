const {Router} = require("express")

const EventController = require("../controllers/EventController")
const checkInstructorExist = require("../middlewares/checkInstructorExists")
const checkClassExist = require("../middlewares/checkClassExists")
const checkRoomExist = require("../middlewares/checkRoomExists")
const checkEventExist = require("../middlewares/checkEventsExists")

const eventRoutes = Router()
const eventController = new EventController()

eventRoutes.post("/events/:instructor_id/:room_id/:class_id",checkInstructorExist,checkClassExist,checkRoomExist, eventController.createEvent)
eventRoutes.get("/events", eventController.listEvent)
eventRoutes.get("/events/:event_id",checkEventExist, eventController.listEventById)
eventRoutes.patch("/events/:event_id",checkEventExist, eventController.updateEvent)
eventRoutes.delete("/events/:event_id",checkEventExist, eventController.deleteEvent)


module.exports = eventRoutes
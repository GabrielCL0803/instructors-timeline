const SessionAdmRepository = require("../repositories/sessionRepository/SessionAdmRepository");
const SessionAdmCreateService = require("../services/SessionServices/SessionAdmCreateService");

const repository = new SessionAdmRepository()
const sessionAdmCreateService = new SessionAdmCreateService(repository)

class SessionCrontroller{
    async admCreate(req, res){
        const {email, password} = req.body;

        await sessionAdmCreateService.execute({email, password})
    }
}

module.exports = SessionCrontroller
class SessionAdmCreateService{
    constructor(sessionAdmRepository){
        this.sessionAdmRepository = sessionAdmRepository
    }
    async execute({email, password}){
        const sessionCreate = await this.sessionAdmRepository.admCreate({email, password})
        return sessionCreate
    }
  }
  
  module.exports = SessionAdmCreateService
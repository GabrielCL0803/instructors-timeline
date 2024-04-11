const AppError = require("../../utils/AppError");
const authConfig = require("../../configs/auth");
const { sign } = require("jsonwebtoken");

const { compare } = require("bcryptjs");
const knex = require("../../database/knex");

class SessionAdmRepository{
    async admCreate({email, password}){

        const adm = await knex("adm").where({email}).first()

        if(!adm){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const passwordMatched = await compare(password, adm.password)

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(adm.id),
            expiresIn
        })

        res.status(201).json({token, adm})
    }
}

module.exports = SessionAdmRepository
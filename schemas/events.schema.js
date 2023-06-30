const Joi = require("joi");

const event = {
    payload: Joi.object({
        username: Joi.string().min(2).max(5),
        password: Joi.string().alphanum().required(),
        accessToken: Joi.string().alphanum(),
        birthyear: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email()
    })
};

const getEventById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
}

module.exports = {event, getEventById};
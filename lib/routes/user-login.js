'use strict';

const Joi = require('joi');


module.exports = {
    method: 'post',
    path: '/user/login',
    options: {
        auth: false,
        tags: ['api'],
        validate: {
            payload: Joi.object({
                mail: Joi.string().required().example('johndoe@gmail.com').description('Email of the user'),
                password: Joi.string().required().example('Password').description('Password of the user')
            })
        },
        handler: async (request, h) => {
            const { userService } = request.services();
            try {
                const user = await userService.login(request.payload.mail, request.payload.password);
                return user;
            } catch (error) {
                return h.response({ error: error.message }).code(400);
            }


        }
    }
};

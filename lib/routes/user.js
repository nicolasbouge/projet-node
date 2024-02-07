'use strict';

const Joi = require('joi')
const Encrypt = require('../modules/Encrypt');

module.exports = {
    method: 'post',
    path: '/user',
    options: {
        auth: false,
        tags: ['api'],
        validate: {
            payload: Joi.object({
                firstName: Joi.string().required().min(3).example('John').description('Firstname of the user'),
                lastName: Joi.string().required().min(3).example('Doe').description('Lastname of the user'),
                password: Joi.string().required().min(8).example('Password').description('Password of the user'),
                mail: Joi.string().required().min(8).example('johndoe@gmail.com').description('Mail of the user'),
                username: Joi.string().required().min(3).example('Quoicoubeh').description('Username of the user'),
                scope: Joi.string().required().example('user').description('user role')
            })
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();


        return await userService.create(request.payload);

    }
};

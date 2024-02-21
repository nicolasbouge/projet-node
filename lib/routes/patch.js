'use strict';


const Joi = require('joi');

module.exports = {
    method: 'patch',
    path: '/user/{id}',
    options: {
        auth : {
            scope: [ 'admin' ]
        },
        tags: ['api'],
        validate: {
            payload: Joi.object({
                firstName: Joi.string().required().min(3).description('Firstname of the user'),
                lastName: Joi.string().required().min(3).description('Lastname of the user'),
                password: Joi.string().required().min(8).description('Password of the user'),
                mail: Joi.string().required().min(8).description('Mail of the user'),
                username: Joi.string().required().min(3).description('Username of the user'),
                scope: Joi.string().required().example('user').description('user role')
            }),
            params: Joi.object({
                id: Joi.number()
            })
        }
        },
        handler: async (request, h) => {

            const { userService } = request.services();

            return await userService.patch(request.payload, request.params);
        }


};

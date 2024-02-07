'use strict';


const Joi = require('joi')

module.exports = {
    method:'delete',
    path: '/user/{id}',
    options: {
        auth : {
            scope: [ 'admin' ]
        },
        tags: ['api'],
        validate: {
            params: Joi.object({
                id: Joi.number().required().example(1).description('Id of the user')
            })
        },
        handler: async (request, h) => {

            const { userService } = request.services();

            return await userService.deleteUserById(request.params.id);
        }
    }

};

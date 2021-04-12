'use strict';



module.exports = {
    method: 'get',
    path: '/users',
    options: {
        auth : {
            scope: [ 'user', 'admin' ]
        },
        tags: ['api'],
    },
    handler: async (request, h) => {
        // Utiliser votre service pour récupérer tous les utilisateurs
        const { userService } = request.services();
        return await userService.getAll();

    }
};

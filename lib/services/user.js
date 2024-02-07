'use strict';

const { Service } = require('@hapipal/schmervice');
const Boom = require("@hapi/boom");
const Encrypt = require("../modules/Encrypt");
const Jwt = require('@hapi/jwt');


module.exports = class UserService extends Service {

    create(user){

        const { User } = this.server.models();

        const hashedPassword = Encrypt.sha1(user.password);
        user.password = hashedPassword;

        return User.query().insertAndFetch(user);
    }
    getAll(){
        const { User } = this.server.models();


        return User.query().select();

    }
    deleteUserById(userId){
        const { User } = this.server.models();
        return User.query().deleteById(userId);


    }
    async patch(user, params) {

        const {User} = this.server.models();

        return User.query()
            .findById(params.id)
            .patch({
                firstName: user.firstName,
                lastName: user.lastName,
                password: Encrypt.sha1(user.password),
                mail: user.mail,
                username: user.username,
                scope: user.scope,
            });
    }
    async login(mail, password){

        const { User } = this.server.models();

        const user = await User.query().findOne({mail: mail});


        if(!user){
            throw Boom.unauthorized('Invalid mail');
        }
        if (Encrypt.compareSha1(password, user.password)){
            return this.generateToken(user);

        }
        throw Boom.unauthorized('Invalid password');
        }
    generateToken(user){
        const token = Jwt.token.generate(
            {
                aud: 'urn:audience:iut',
                iss: 'urn:issuer:iut',
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.mail,
                scope: user.scope
            },
            {
                key: 'random_string', // La clé qui est définit dans lib/auth/strategies/jwt.js
                algorithm: 'HS512'
            },
            {
                ttlSec: 14400 // 4 hours
            }
        );
    return token
    }

}

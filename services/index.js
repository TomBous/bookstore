// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken");

// services
const user_service = require('./user'),
    mailer_service = require('./mailer'),
    bcrypt_service = require('./bcrypt'),
    jwt_service = require('./jwt'),
    genres_service = require('./genres');
   
    
    

// create a services object for map all the services
const services = {
    genres: genres_service(repositories),
    user: user_service(repositories),
    mailer: mailer_service(nodemailer),
    bcrypt: bcrypt_service(bcrypt),
    jwt: jwt_service(jwt),
}

// export our service object
module.exports = services;
// controllers dépendencies
const genres = require('../config/routes/genres');
const services = require('../services/index');

// controllers
const user_controller = require('./user'),
    genres_constroller = require('./genres'),
    cat_controller=require('./cat');
// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services),
    genre: genres_constroller(services),
    cat: cat_controller(services)
}

// export our controllers object
module.exports = controllers;
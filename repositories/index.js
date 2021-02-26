// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
<<<<<<< HEAD
const user_repository = require('./user');
const cat_repository=require('./category');
const livre_repository=require('./livre');
=======
const user_repository = require('./user'),
    genres_repository = require('./genres'),
    cat_repository=require('./category'),
    livre_repository=require('./livre');
>>>>>>> 251583b1b442ba1cbc4622fc77b37ba4885209b9

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models),
<<<<<<< HEAD
=======
    genres: genres_repository(models),
>>>>>>> 251583b1b442ba1cbc4622fc77b37ba4885209b9
    cat: cat_repository(models),
    livre: livre_repository(models)
}

// export our repositories object
module.exports = repositories;
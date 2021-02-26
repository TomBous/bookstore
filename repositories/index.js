// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
<<<<<<< HEAD
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
=======
const user_repository = require('./user'),
    genres_repository = require('./genre'),
    category_repository = require('./category'),
    book_repository =require('./livre');
>>>>>>> 9f6d1798a169e6420baf34c2d2dcab67a74069d1

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models),
<<<<<<< HEAD
<<<<<<< HEAD
=======
    genres: genres_repository(models),
>>>>>>> 251583b1b442ba1cbc4622fc77b37ba4885209b9
    cat: cat_repository(models),
    livre: livre_repository(models)
=======
    genre: genres_repository(models),
    category: category_repository(models),
    book: book_repository(models)
>>>>>>> 9f6d1798a169e6420baf34c2d2dcab67a74069d1
}

// export our repositories object
module.exports = repositories;
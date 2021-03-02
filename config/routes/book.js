const verifyToken = require('../../middlewares/verifyToken')

module.exports = (express, controllers) => {
    
    const router = express.Router();

    router.route('/books')
        .get( verifyToken ,controllers.book.getAll)

        router.route('/rents/:id')
        .post(verifyToken ,controllers.book.subtractedBookQuantity)

    return router;
};
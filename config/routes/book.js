module.exports = (express, controllers) => {
    
    const router = express.Router();

    router.route('/books').get(controllers.book.getAll)
    router.route('/books/search').get(controllers.book.getByFilter)

        router.route('/rents/:id')
        .post(verifyToken ,controllers.book.subtractedBookQuantity)

    return router;
};
module.exports = (models) => {
    const book_repository = {
        getAll: async (data) => {
            return models.book.query("SELECT Books.title,Books.author,Categories.name FROM Books LEFT JOIN Categories ON Books.categoryId = Categories.id;");
        },
        getById: async (id) => {
            return models.book.query("SELECT Books.title,Books.author,Categories.name FROM Books,Categories WHERE Books.categoryId=Categories.id AND Books.id = ? LIMIT 1", [id]);
        },
        getWishlist: async (id) => {
            return models.book.query("SELECT * FROM Wishlist WHERE Users_id = ? ", [id]);
        },
        subtractedBookQuantity: async (id) => {
            return models.book.query(" UPDATE Books SET quantity = quantity - 1 WHERE id = ?  ", [id]);
        },
        bookQuantity: async (id) => {
            return models.book.query(" SELECT quantity FROM Books WHERE id =?  ", [id]);
        },
        createRents: async (Users_id, Books_id) => {
            return models.book.query(" INSERT INTO rents ( Users_id, Books_id) VALUES(?,?) ", [Users_id, Books_id]);
        }
    }
    
    return book_repository;
}
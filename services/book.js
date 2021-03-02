module.exports = (repositories) => {
    const livre_service = {
        getAll: async (data) => {
            return repositories.book.getAll();
        },
        getById: async (id) => {
            const rows = await repositories.book.getById(id);
            return rows[0];
        },
        bookQuantity: async (id) => {
            const rows = await repositories.book.bookQuantity(id);
            const quantity = rows.map(item => item.quantity)
            return quantity[0]

        },
        subtractedBookQuantity: async (id) => {
            const rows = await repositories.book.subtractedBookQuantity(id);
            return rows;

        },

        createRents: async (Users_id, Books_id) => {
            const rows = await repositories.book.createRents(Users_id, Books_id);
            return rows;

        },
    }

   return livre_service;
}
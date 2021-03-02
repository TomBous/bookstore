module.exports = (services) => {
    const book_controller = {
        getAll: async (req, res) => {
            let result = await services.book.getAll();
            res.send(result);
        },
        subtractedBookQuantity: async (req, res) => {
            const { id } = req.params;
            const Users_id = req.body.user;
            const Books_id = req.params.id;
    
    
            const bookQuatity = await services.book.bookQuantity(id);
    
            const reservation = async () => {
                const sousTred = await services.book.subtractedBookQuantity(id)
                const createReservation = await services.book.createRents(Users_id, Books_id);
                res.status(201).send(createReservation)
            }
    
            if (bookQuatity > 0) {
                reservation()
            } else {
                res.status(201).send("Ce livre n'est malheureusement pas en stock mais vous pouvez l'ajouter dans votre liste des souhaits")
    
    
            }
    
    
        }
    
    }
    
    return book_controller;
}
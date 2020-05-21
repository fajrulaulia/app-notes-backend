const Book = require('../models/bookModel')
module.exports = {
    findAll: (_, res) => {
        Book.find((err, doc) => {
            if (err) res.status(500).json({ message: 'Error Request' })
            res.status(200).json({
                data: doc,
                total: doc.length
            })

        });
    },
    findOne: (req, res) => {
        Book.findOne({ _id: req.params.id }, (err, doc) => {
            if (doc === "" || err) {
                res.status(404).json({ message: 'Data not found !!' })
            } else {
                res.status(200).json(doc)
            }
        });
    },

    insert: (req, res) => {
        for (let i = 0; i < req.body.length; i++) {
            Book(req.body[i]).save((err, book) => {
                if (err) console.error(err);
            });
        }
        res.status(200).json({ message: 'data Inserted' })


    }
}
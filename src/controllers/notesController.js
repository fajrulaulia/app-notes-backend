const Notes = require('../models/Notes')

module.exports = {
    findAll: (_, res) => {
        Notes.find((err, doc) => {
            if (err) res.status(500).json({ message: 'Error Request' })
            res.status(200).json({
                data: doc,
                total: doc.length
            })

        });
    },
    findOne: (req, res) => {
        Notes.findOne({ _id: req.params.id }, (err, doc) => {
            if (doc === "" || err) {
                res.status(404).json({ message: 'Data not found !!' })
            } else {
                res.status(200).json(doc)
            }
        });
    },

    insert: (req, res) => {
        Notes(req.body).save((err, doc) => {
            if (err) console.error(err);
            res.status(200).json({
                lastInsertedId: doc._id,
                message: 'data Inserted'
            })
        });
    }
}
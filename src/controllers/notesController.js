const Response = require('../configs/response')
const Notes = require('../models/Notes')

module.exports = {
    findAll: (_, res) => {
        Notes.find((err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Retriving Notes")).end()
            res.status(200).json(Response.success("Success when Retriving Notes", doc)).end()
        });
    },

    findOne: (req, res) => {
        Notes.findOne({ _id: req.params.id }, (err, doc) => {
            if (doc === undefined) return res.status(404).json(Response.success("Success but notes is empty")).end()
            if (err && doc === undefined) return res.status(500).json(Response.error("Failed When Retriving Notes")).end()
            res.status(200).json(Response.success("Success when Retriving Notes", doc)).end()
        });
    },

    insert: (req, res) => {
        var date = new Date();
        const data = req.body
        Object.assign(data, { created_at: date, update_at: date });
        
        Notes(data).save((err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Insert Notes to Database")).end()
            res.status(500).json(Response.success("Success When Insert Notes to Database", doc)).end()
        });
    }

}
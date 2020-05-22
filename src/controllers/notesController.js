const Response = require('../configs/response')
const Notes = require('../models/Notes')

module.exports = {
    findAll: (_, res) => {
        Notes.find((err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Retriving Notes")).end()
            res.status(200).json(Response.success("Success Retreiving Notes", doc)).end()
        })
    },

    findOne: (req, res) => {
        Notes.findOne({ _id: req.params.id }, (err, doc) => {
            if (doc === undefined) return res.status(404).json(Response.success("Success but notes is empty")).end()
            if (err && doc === undefined) return res.status(500).json(Response.error("Failed When Retriving Notes")).end()
            res.status(200).json(Response.success("Success Retriving Note", doc)).end()
        })
    },

    insert: (req, res) => {
        let date = new Date()
        Object.assign( req.body, { created_at: date, update_at: date })
        Notes( req.body).save((err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Insert Notes to Database")).end()
            res.status(500).json(Response.success("Success Insert Notes", doc)).end()
        })
    },

    update: (req, res) => {
        let date = new Date()
        Object.assign( req.body, { update_at: date })
        Notes.findOneAndUpdate({ _id: req.params.id }, { $set: req.body}, { upsert: true, new: true }, (err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Update Notes to Database")).end()
            res.status(200).json(Response.success("Success Update Note", doc)).end()
        })
    },

    delete: (req, res) => {
        Notes.remove({ _id: req.params.id }, (err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed When Update Notes to Database")).end()
            res.status(200).json(Response.success("Success Delete Note")).end()
        });
    }

}
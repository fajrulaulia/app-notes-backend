const output = require('../configs/response')
const Notes = require('../models/Notes')

module.exports = {
  findAll: (_, res) => {
    Notes.find((err, doc) => {
      if (err) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    })
  },

  findOne: (req, res) => {
    Notes.findOne({ _id: req.params.id }, (err, doc) => {
      if (err && doc != undefined) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else if (doc == undefined) {
        res.status(401).json(output.success("Notes is empty", doc)).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    })
  },

  insert: (req, res) => {
    let date = new Date()
    Object.assign(req.body, { created_at: date, update_at: date })
    Notes(req.body).save((err, doc) => {
      if (err) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    })
  },

  update: (req, res) => {
    let date = new Date()
    Object.assign(req.body, { update_at: date })
    Notes.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true, new: true }, (err, doc) => {
      if (err) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    })
  },

  delete: (req, res) => {
    Notes.remove({ _id: req.params.id }, (err, doc) => {
      if (err) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    });
  }

}
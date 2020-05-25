const output = require('../configs/response')
const Notes = require('../models/Notes')
const Auth = require('../models/Auth')
const Token = require('../configs/token')

module.exports = {

  findAll: (req, res) => {
    const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
      req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
    let data = Token.decodeToken(bearerToken).data._id
    Notes.find({ auth: data }, (err, doc) => {
      if (err) {
        res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else {
        res.status(200).json(output.success("Success Retreiving Notes", doc)).end()
      }
    })
  },

  findOne: (req, res) => {
    const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
      req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
    let data = Token.decodeToken(bearerToken).data._id

    Notes.findOne({ _id: req.params.id, auth: data }, (err, doc) => {
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
    if ((req.file === undefined || req.file === null)) {
      return res.status(500).json(output.error("Upload File Problem, make sure you Upload File ext Image")).end()
    }
    if (!req.file.mimetype.includes("image/")) {
      return res.status(500).json(output.error("Upload File Problem, make sure you Upload File ext Image")).end()
    }

    let date = new Date()

    const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
      req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
    let data = Token.decodeToken(bearerToken).data._id
    Auth.findOne({ _id: data }, (err, doc) => {

      if (err && doc != undefined) {
        return res.status(500).json(output.error("Failed When Retriving Notes")).end()
      } else if (doc == undefined) {
        return res.status(404).json(output.error("Failed When Retriving Notes")).end()
      } else {
        Object.assign(req.body, {
          thumbnail: req.file,
          created_at: date,
          update_at: date,
          auth: doc
        })

        Notes(req.body).save((err, doc1) => {
          if (err) {
            return res.status(500).json(output.error("Failed When Retriving Notes")).end()
          } else {
            return res.status(200).json(output.success("Success Retreiving Notes", doc1)).end()
          }
        })
      }
    })
  },

  update: (req, res) => {
    if ((req.file !== undefined || req.file !== null)) {
      Object.assign(req.body, { thumbnail: req.file })
    }
    if (!req.file.mimetype.includes("image/")) {
      return res.status(500).json(output.error("Upload File Problem, make sure you Upload File ext Image")).end()
    }
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
const model = require("../models/score")
const ObjectId = require('mongodb').ObjectId

class Score {
  static add_data(req,res) {
    model.create({
      name: req.body.name,
      score: req.body.score,
      createdAt: req.body.createdAt
    })
    .then(response => {
      let result = {
        "_id":response._id,
        "name":req.body.name,
        "score":req.body.score,
        "createdAt":req.body.createdAt
      }
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static get_all(req,res) {
    model.find().sort({score: 'desc'}).limit(10)
    .exec((err,response) => {
      res.send(response)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static get_one(req,res) {
    model.findOne({_id:req.params.id})
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.send(err)
    })
  }
}
module.exports = Score
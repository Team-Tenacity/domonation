const mongoose = require('mongoose')
const Message = require('../models/messageModel.js');
mongoose.Promise = require('q').Promise

module.exports = {

  create: (req, res, next) => {
    Message.create(req.body, function(err, r){
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).json(r)
    })
    // .then(function(r){
    //   User.findById({_id: r.user}).exec(function(e, r) {
    //     if (e) {
    //       console.log(e);
    //       return res.status(500).send(e);
    //     }
    //     console.log(r);
    //     res.status(200).json(r);
    //   })
    // })
  },


  read: (req, res, next) => {
    Message.find({}).populate('user').exec(function(e, r) {
      if (e) {
        console.log(e);
        return res.status(500).send(e);
      }
      console.log(r);
      res.status(200).json(r);
    })
    // Message.find({}, function(err, r) {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send(err);
    //   }
    //   console.log(r)
    //   res.status(200).json(r)
    // })
  }

}

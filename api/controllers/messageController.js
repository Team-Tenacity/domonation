var mongoose = require('mongoose')
var Message = require('../models/messageModel.js');
var moment = require('moment');
// mongoose.Promise = require('q').Promise
 
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
    var message = []
    Message.find({}).populate('user').exec(function(e, r) {
      if (e) {
        console.log(e);
        return res.status(500).send(e);
      }
      console.log(r);
      for (var i = 0; i < r.length; i++){
        formatDate = moment(r[i].date).format("dddd, MMMM Do, h:mm:ss a")
        message.push({
          content: r[i].content,
          date: formatDate,
          user: r[i].user,
          _id: r[i]._id,
          __v: r[i].__v
        })
      }

      console.log(message)
        res.status(200).json(message);


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

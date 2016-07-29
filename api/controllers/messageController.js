const Message = require('../models/messageModel.js');

module.exports = {

  create: (req, res, next) => {
    console.log(Message)
    Message.create(req.body, function(err, r){
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).json(r);
    })
  },

  read: (req, res, next) => {
    console.log(req.params.user)
    let user = req.params.user;
    let user_id = user.toString();
    Message.find({user: user_id}, function(err, r) {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      console.log(r)
      res.status(200).json(r)
    })
  }

}

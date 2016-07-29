var User = require('../models/userModel');


module.exports = {

  create: (req, res, next) => {
    
    User.create(req.body, function(err, r){
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).json(r);
    })
  },

  show: (req, res, next) => {
    User.findOne({email: req.body.email}, function(err, user){
      if (err) return res.status(500).send(err);
      res.status(200).json(user);
    })
  }

}

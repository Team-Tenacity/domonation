var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  content: {type: String, required: true},
  user: {type: String, ref: 'User', required: true},
  date: {type: Date, default: Date.now }
});

// messageSchema.pre('init', function (next, doc, query) {
//   // hack
//   query.populate('user');
//   next();
// });

module.exports = mongoose.model('Message', messageSchema);

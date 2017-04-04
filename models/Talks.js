var mongoose = require('mongoose');
var TalkSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
  year: {type: Number, default: 0},
  speaker: String,
  month: String,
  imageUrl: String
});

TalkSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Talk', TalkSchema);

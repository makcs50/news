const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: String,
  text: String,
  news: {
    type: mongoose.Schema.ObjectId,
    ref: "Comment"
  }
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
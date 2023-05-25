const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  h1: String,
  text: String,
  categories: {
    type: mongoose.Schema.ObjectId,
    ref: "Categories"
  }
});

const News = mongoose.model('news', newsSchema);

module.exports = News;
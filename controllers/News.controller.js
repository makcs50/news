const news = require('../models/News.model');

// news.controller.js
// newsController
module.exports.newsController = {
    getNews: (req, res) => {
      news.find({}).then(
        (data) => res.json(data))
    },
    getNewsFromCategories: (req, res) => {
      news.find({categories: '646e62082514c70ba5985e9e'}).populate('categories').then(
        (data) => res.json(data))
    },
    getNewsFromCategories: (req, res) => {
      news.find({categories: '646e62082514c70ba5985e9e'}).populate('categories').then(
        (data) => res.json(data))
    },

    getNewId: (req, res) => {
      news.findOne({_id: req.params.id}).then(
        (data) => res.json(data))
    },

    deleteNews: (req, res) => {
      news.findOneAndRemove(req.params.id).then(
      (data) => res.json(data))
      },
      
    editNews: (req, res) => {
      news.findByIdAndUpdate(req.params.id, {h1: req.body.h1}).then(
        (data) => res.json(data))
      },

    createNews: (req, res) => {
      const { h1, text, categories } = req.body;
      console.log(req.body)
      news.create({
        h1,
        text,
        categories,
      }).then(() => {
        res.json("Новость добавленa")
      })
      }
    }
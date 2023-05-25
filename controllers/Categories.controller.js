const Categories = require('../models/Categories.model');

module.exports.categoriesController = {
    getCategories: (req, res) => {
        Categories.find({}).then(
        (data) => res.json(data))
    },


    deleteCategories: (req, res) => {
        Categories.findOneAndRemove(req.params.id).then(
      (data) => res.json(data))
      },
      

    createCategories: (req, res) => {
      const { name } = req.body;
      console.log(req.body)
      Categories.create({name}).then(() => {
        res.json("Новость добавленa")
      })
      }
    }
const Comment = require('../models/Comment.model');

module.exports.commentController = {
    getComment: (req, res) => {
      Comment.find({}).then(
        (data) => res.json(data))
    },

    deleteComment: (req, res) => {
        Comment.findOneAndRemove(req.params.id).then(
        (data) => res.json(data))
        },

    // getComment: (req, res) => {
    //     Comment.find({categories: '646e62082514c70ba5985e9e'}).populate('categories').then(
    //         (data) => res.json(data))
    //       }
    //     }

    createComment: (req, res) => {
            const { name, text, news } = req.body;
            console.log(req.body)
            Comment.create({
              name,
              text,
              news,
            }).populate('h1').then(() => {
              res.json("comment добавлен")
            })
     }
    }
const {Author} = require("../models/authors.model");


module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(data => res.json( {results : data} ))
    .catch(err => res.json(err.errors))
};

module.exports.findAll = (req, res) => {
    Author.find()
    .then(data => res.json( {results : data} ))
    .catch(err => res.json(err.errors))
};

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params._id})
    .then(data => res.json( {results : data} ))
    .catch(err => res.json(err.errors))
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params._id }, req.body, { useFindAndModify: true, runValidators: true })
    .then(data => res.json( {results : data} ))
    .catch(err => res.json(err.errors))
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
    .then(data => res.json( {results : data} ))
    .catch(err => res.json(err.errors))
};
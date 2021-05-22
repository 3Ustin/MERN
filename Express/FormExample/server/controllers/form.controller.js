const Form = require("../models/form.model");

module.exports.findAllForms = (req, res) => {
  Form.find()
    .then(allForm => res.json({ form: allForm }))
    .catch(err => res.json({ message: "Something went wrong1", error: err }));
};

module.exports.findOneSingleForm = (req, res) => {
	Form.findOne({ _id: req.params.id })
		.then(oneSingleForm => res.json({ form: oneSingleForm }))
		.catch(err => res.json({ message: "Something went wrong2", error: err }));
};

module.exports.createNewForm = (req, res) => {
  Form.create(req.body)
    .then(newlyCreatedForm => res.json({ form: newlyCreatedForm }))
    .catch(err => res.json({ message: "Something went wrong3", error: err }));
};

module.exports.updateExistingForm = (req, res) => {
  Form.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedForm => res.json({ form: updatedForm }))
    .catch(err => res.json({ message: "Something went wrong4", error: err }));
};

module.exports.deleteAnExistingForm = (req, res) => {
  Form.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong5", error: err }));
};

module.exports.deleteAllExistingForm = (req, res) => {
  Form.deleteMany()
    .then(allForm => res.json({ form: allForm }))
    .catch(err => res.json({ message: "Something went very wrong6", error: err }));
};

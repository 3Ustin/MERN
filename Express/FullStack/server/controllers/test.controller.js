const Test = require("../models/test.model");

module.exports.findAllTests = (req, res) => {
  Test.find()
    .then(allTest => res.json({ test: allTest }))
    .catch(err => res.json({ message: "Something went wrong1", error: err }));
};

module.exports.findOneSingleTest = (req, res) => {
	Test.findOne({ _id: req.params.id })
		.then(oneSingleTest => res.json({ test: oneSingleTest }))
		.catch(err => res.json({ message: "Something went wrong2", error: err }));
};

module.exports.createNewTest = (req, res) => {
  Test.create(req.body)
    .then(newlyCreatedTest => res.json({ test: newlyCreatedTest }))
    .catch(err => res.json({ message: "Something went wrong3", error: err }));
};

module.exports.updateExistingTest = (req, res) => {
  Test.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedTest => res.json({ test: updatedTest }))
    .catch(err => res.json({ message: "Something went wrong4", error: err }));
};

module.exports.deleteAnExistingTest = (req, res) => {
  Test.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong5", error: err }));
};

module.exports.deleteAllExistingTest = (req, res) => {
  Test.deleteMany()
    .then(allTest => res.json({ test: allTest }))
    .catch(err => res.json({ message: "Something went very wrong6", error: err }));
};

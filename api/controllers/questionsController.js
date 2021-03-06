'use strict';


var mongoose = require('mongoose'),
Question = mongoose.model('Question');

exports.list_all_questions = function(req, res) {
  Question.find({}, function(err, new_q) {
    if (err)
      res.send(err);
    res.json(new_q);
  });
};

exports.read_all_questionIds = function(req, res) {
  Question.find({},'_id', function(err, new_q) {
    if (err)
      res.send(err);
    console.log(new_q);
    res.json(new_q);
  });
}


exports.create_a_question = function(req, res) {
  var new_q = new Question(req.body);
  new_q.save(function(err, new_q) {
    if (err)
      res.send(err);
      res.json(new_q);
  });
};


exports.read_a_question = function(req, res) {
  //var _id = mongoose.Types.ObjectId.fromString(req);
  Question.findById(req.params.qId, function(err, new_q) {
    if (err)
      res.send(err);
    res.json(new_q);
  }).select("-createddate");
};


exports.update_a_question = function(req, res) {
  Question.findOneAndUpdate({_id: req.params.qId}, req.body, function(err, new_q) {
    if (err)
      res.send(err);
    res.json(new_q);
  });
};


exports.delete_a_question = function(req, res) {


  Question.remove({
    _id: req.params.qId
  }, function(err, new_q) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

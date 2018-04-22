'use strict';


var mongoose = require('mongoose'),
Answer = mongoose.model('Answer');

exports.create_answers = function(req, res) {
  var new_a = new Answer(req.body);
  new_a.save(function(err, new_a) {
    if (err)
      res.send(err);
    res.json(new_a);
  });
};

exports.get_all_answers = function(req, res) {
  Answer.find({}, function(err, new_a) {
    if (err)
      res.send(err);
    res.json(new_a);
  });
};

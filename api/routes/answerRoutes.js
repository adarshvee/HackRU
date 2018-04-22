'use strict';
module.exports = function(app) {
  var questionList = require('../controllers/answersController');

  // todoList Routes
  app.route('/answers')
    .get(questionList.get_all_answers)
    .post(questionList.create_answers);

};

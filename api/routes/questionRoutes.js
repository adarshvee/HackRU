'use strict';
module.exports = function(app) {
  var questionList = require('../controllers/questionsController');

  // todoList Routes
  app.route('/questions')
    .get(questionList.list_all_questions)
    .post(questionList.create_a_question);


  app.route('/questions/:qId')
    .get(questionList.read_a_question)
    .put(questionList.update_a_question)
    .delete(questionList.delete_a_question);

};

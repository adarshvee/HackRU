'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnswerSchema = new Schema({
    userId: {
      type: String,
      required: 'Kindly enter the user ID'
    },
    qAndA: [{
      qID: {
        type: String,
        required: 'Kindly enter the question ID'
      },
      answer: {
        type: String
      }}],
    selfRating : {
      type: String
    },
    currCareer : {
      type: String
    }
});

module.exports = mongoose.model('Answer', AnswerSchema);

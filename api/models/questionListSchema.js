'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    questionText: {
      type: String,
      required: 'Kindly enter the question'
    },
    createddate: {
      type: Date,
      default: Date.now
    },
    questionType : {
      type : String,
      enum : ['M','F'],
    },
    active : {
      type : Boolean
    },
    options : [
        {optionText : {
        type : String
      }
    }]

}, { versionKey: false });

module.exports = mongoose.model('Question', QuestionSchema);

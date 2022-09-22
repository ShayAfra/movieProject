const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    favorite:{
        type: Boolean,
        required: false,
    }     
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: false,
  },
  actors: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  runTime: {
    type: String,
    required: false,
  },
  plot: {
    type: String,
    required: false,
  },
  writer: {
    type: String,
    required: false,
  },
  awards: {
    type: String,
    required: false,
  },
  boxOffice: {
    type: String,
    required: false,
  },
  rated: {
    type: String,
    required: false,
  },
  ratedVal: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Movie', MovieSchema)

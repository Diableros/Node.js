import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  release_year: {
    type: Number,
    required: true,
  },
})

export default model('book', bookSchema)

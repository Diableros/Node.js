import mongoose, { Schema, model } from 'mongoose'

const readerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  surname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
})

export default model('reader', readerSchema)

import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
  },
  username: {
    type: String,
    required: true,
    minLenght: 2,
  },
  email: {
    type: String,
    required: true,
    minLenght: 2,
  },
})

export default model('user', userSchema)

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const {
  ENV_MONGODB_USER,
  ENV_MONGODB_PASS,
  ENV_MONGODB_CLUSTER,
  ENV_MONGODB_DB,
} = process.env

const connectDB = () => {
  try {
    console.log(`Try connecting to ${ENV_MONGODB_DB}...`)

    const uri = `mongodb+srv://${ENV_MONGODB_CLUSTER}/${ENV_MONGODB_DB}?retryWrites=true&w=majority`
    mongoose.connect(uri, {
      user: ENV_MONGODB_USER,
      pass: ENV_MONGODB_PASS,
    })

    return mongoose.connection
  } catch (error: unknown) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB

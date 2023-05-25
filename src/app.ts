import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routers from './routes/routers.js'
import logOrigin from './middlewares/logOrigin.js'

dotenv.config()

const app = express()

const { ENV_HOST, ENV_PORT, ENV_MONGODB_URL } = process.env

const connectionDb = () => {
  if (ENV_MONGODB_URL) {
    mongoose.connect(ENV_MONGODB_URL)
    return mongoose.connection
  } else {
    console.error("Can't get mongodb URL from enveronment")
  }
}

const startServer = () => {
  app.listen(ENV_PORT, () => {
    console.log(`Server started on ${ENV_HOST}:${ENV_PORT}`)
  })
}
app.use(cors())
app.use(logOrigin)
app.use(bodyParser.json())
app.use(routers)

const connectDb = connectionDb()

if (connectDb) {
  connectDb
    .on('error', console.log)
    .on('disconected', connectionDb)
    .once('open', () => {
      console.log('DB connected')
      startServer()
    })
}

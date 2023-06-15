import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import routers from './routes/routers.js'
import logOrigin from './middlewares/logOrigin.js'
import connectDB from './db/connectDB.js'

dotenv.config()

const app = express()

const { ENV_HOST, ENV_PORT } = process.env

const startServer = () => {
  app.listen(ENV_PORT, () => {
    console.log(`App server started on ${ENV_HOST}:${ENV_PORT}`)
  })
}
app.use(cors())
app.use(logOrigin)
app.use(bodyParser.json())
app.use(routers)

const connectDb = connectDB()

if (connectDb) {
  connectDb
    .on('error', console.log)
    .on('disconected', connectDB)
    .once('open', () => {
      console.log(
        `App success connected to ${connectDb.db.databaseName}\nUser: ${connectDb.user}`,
      )

      startServer()
    })
}

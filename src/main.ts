import * as dotenv from 'dotenv'
import { startServer } from './modules/server.js'

dotenv.config()

startServer(process.env.HOST, process.env.PORT)


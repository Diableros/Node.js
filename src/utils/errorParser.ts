import { Response } from 'express'
import { Error } from 'mongoose'

const errorParser = (error: Error, res: Response) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    res.status(404).send(error.message)
  } else {
    res.status(500).send(error.message)
  }
}

export default errorParser

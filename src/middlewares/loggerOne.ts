import { Request, Response, NextFunction } from 'express'

const loggerOne = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('middlewareOne was started')
  next()
}

export default loggerOne

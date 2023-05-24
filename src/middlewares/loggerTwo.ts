import { Request, Response, NextFunction } from 'express'

const loggerTwo = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('middlewareTwo was started')
  next()
}

export default loggerTwo      

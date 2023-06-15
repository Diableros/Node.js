import { Request, Response, NextFunction } from 'express'

const logOrigin = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request ${req.method} on ${req.hostname}${req.originalUrl}`)
  next()
}

export default logOrigin

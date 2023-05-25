import { Request, Response, NextFunction } from 'express'

const logOrigin = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Origin URL is: ${req.originalUrl}`)
  next()
}

export default logOrigin
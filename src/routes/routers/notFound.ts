import express, { Request, Response } from 'express'
import { RoutePath } from '../routePath.js'

const router = express.Router()

const pathNotFoundSend = (req: Request, res: Response) => {
  const reqPath = `${req.hostname}${req.path}`
  res.status(404).send((`Path ${reqPath} not found`))
}

router.get(RoutePath.NotFound, pathNotFoundSend)
router.post(RoutePath.NotFound, pathNotFoundSend)
router.patch(RoutePath.NotFound, pathNotFoundSend)
router.delete(RoutePath.NotFound, pathNotFoundSend)

export default router

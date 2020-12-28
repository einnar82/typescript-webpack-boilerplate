import { Request, Response } from "express"

const testController = (req: Request, res: Response) => {
  res.json({
    message: 'module ok!'
  })
}

export {
   testController
}
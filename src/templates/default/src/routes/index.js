import { Router } from 'express'

import helloRouter from 'routes/hello'

const router = Router()

router.use('/api/hello', helloRouter)

export default router

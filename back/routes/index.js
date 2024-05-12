const Router = require('express')
const router = new Router()
const directionRouter = require('./directionRouter')
const applicationRouter = require('./applicationRouter')
const userRouter = require('./userRouter')

router.use('/direction', directionRouter)
router.use('/application', applicationRouter)
router.use('/user', userRouter)



module.exports = router

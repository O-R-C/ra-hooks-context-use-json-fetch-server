const router = require('express').Router()

router.use('/', require('../index'))
router.use('/data', require('../data'))
router.use('/error', require('../error'))
router.use('/loading', require('../loading'))

module.exports = router

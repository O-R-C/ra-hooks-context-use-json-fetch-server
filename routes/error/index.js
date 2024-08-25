const router = require('express').Router()

router.get('/', async (req, res) => {
  res.status(500).send(JSON.stringify({ status: 'Internal Error' }))
})

module.exports = router

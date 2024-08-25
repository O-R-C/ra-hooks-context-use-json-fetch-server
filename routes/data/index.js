const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }))
})

module.exports = router

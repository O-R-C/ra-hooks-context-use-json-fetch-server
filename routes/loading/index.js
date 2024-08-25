const router = require('express').Router()

router.get('/', async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
  res.send(JSON.stringify({ status: 'ok' }))
})

module.exports = router

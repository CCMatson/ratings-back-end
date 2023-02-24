const router = require('express').Router()
const cafesCtrl = require('../controllers/cafes.js')

router.get('/', cafesCtrl.index)
router.post('/', cafesCtrl.create)
router.put('/:id', cafesCtrl.update)
router.delete('/:id', cafesCtrl.delete)

module.exports = router
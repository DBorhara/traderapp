const router = require('express').Router()
const {List} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const lists = await List.findAll({
      attributes: 'name'
    })
    res.json(lists)
  } catch (error) {
    next(error)
  }
})

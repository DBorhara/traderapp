const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stocks: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

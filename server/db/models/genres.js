const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('genres', {
  name: DataTypes.STRING
})

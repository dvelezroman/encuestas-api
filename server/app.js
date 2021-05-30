require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./src/models')
const testRoutes = require('./src/routes/test.routes')
const initRoutes = require('./src/routes/tutorial.routes')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
testRoutes(app)
initRoutes(app)

db.sequelize.sync()
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`)
})

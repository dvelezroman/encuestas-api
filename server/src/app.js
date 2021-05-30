require('dotenv').config({ path: '../.env' })

const express = require('express')
const app = express()
const db = require('./models')
const initRoutes = require('./routes/tutorial.routes')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
initRoutes(app)

db.sequelize.sync()
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`)
})

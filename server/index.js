const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveGuests } = require('./routes/guestListRoutes')





app.use(express.json())
mongoose.connect(
    URI,
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))

saveGuests(app)


app.listen(port, () => console.log(`App listening on port ${port}`))
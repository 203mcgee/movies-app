const express = require('express')
const app = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

app.use('/',router)
app.set('view engine','ejs')


app.listen(PORT,() => console.log(`Server is listening http://localhost:${PORT}`))



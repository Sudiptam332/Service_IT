const connect = require("./db")
const express = require('express')

connect();

const app = express()
const port = 5173

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/service', require('./routes/service'));
app.use('/api/purchase', require('./routes/purchase'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
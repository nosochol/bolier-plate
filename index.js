const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nosochol:1004@cluster0.48re6.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false 
}).then(()=> console.log('mongodbd connnected...'))
.catch(err => console.log('error...'))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
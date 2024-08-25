require('dotenv').config()

const express = require('express')
const app = express()
//how we get math.pi , math.random , similarly we can use app. now
const port = 3000
//we have many virtual ports , more than 60000, 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(`/twitter`, (req,res)=>{
  res.send(`adidotcom`)
})

app.get(`/youtube`,(req,res)=>{
  res.send(`chaliye shuru karte hai`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get(`/login`,(req,res)=>{
  res.send(`<h1>please login at adiIsAwsome.com </h1>`)
})


//this is a server now
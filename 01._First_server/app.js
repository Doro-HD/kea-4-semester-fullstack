const express = require('express')
const app = express()

//route
app.get('/', (req, res) => {
  res.send({})
})

let bicycleSpins = 0
app.get('/spin-the-bicycle', (req, res) => {
  bicycleSpins += 1
  res.send({spins: bicycleSpins})
})

app.get('/kick-the-dinosaur', (req, res) => {
  res.send({message: 'The dinosaurs says "ow ow ow"'})
})

app.get('/about', (req, res) => {
  res.send(`
      <h1>This is the about page</h1>
    `)
})

app.listen(8080)

const express = require('express')
const app = express()

app.use(express.json())
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

app.get('/bat', (req, res) => {
  const adjective = req.query.adjective
  res.send({msg: `The bat is ${adjective}`})
})

app.get('/bottle/:bottleSize', (req, res) => {
  const bottleSize = req.params.bottleSize
  res.send({msg: `The bottle has a size of ${bottleSize}`})
})

app.post('/package', (req, res) => {
  res.send({msg: req.body})
})

app.listen(8080)

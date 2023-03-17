import express from 'express'
import path from 'path'
import jokes from './util/jokes.js'

const app = express()
// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'))
})

app.get('/IRLQuests', (req, res) => {
  res.sendFile(path.resolve('public/pages/IRLQuests/IRLQuests.html'))
})

const port = 8080
app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }

  console.log('Listening on port ', port)
})
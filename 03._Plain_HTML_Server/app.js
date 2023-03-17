const express = require('express')
const app = express()

const { getTanks, addTank } = require('./public/util/tanks')

// console.log(getTanks())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html' )
})

app.get('/guards', (req, res) => {
  res.sendFile(__dirname + '/public/guards/guards.html')
})

app.get('/proxy', async (req, res) => {
  const data = await fetch('https://www.google.com')
  const text = await data.text()

  res.send(text)
})

app.listen(8080, () => console.log('Listening on port 8080'))
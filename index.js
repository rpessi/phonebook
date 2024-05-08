const express = require('express')
const app = express()
app.use(express.json())

process.env.TZ = "Europe/Helsinki"

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-53233523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

let days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const number = persons.length
  const date_time = new Date()
  const date = date_time.getDate()
  const time2 = date_time.toTimeString()
  const day = days[date_time.getDay()]
  const month = months[date_time.getMonth()]
  const year = date_time.getFullYear()
  const result1 = `<p>Phonebook has info for ${number} people.</p>`
  const result2 = `<p>${day} ${month} ${date} ${year} ${time2}</p>`
  const result = result1 + result2
  response.send(result)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

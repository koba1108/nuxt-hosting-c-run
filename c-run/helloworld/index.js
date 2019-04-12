const express = require('express')
const app = express()

const checkPath = (req) => {
  console.log('originalUrl', req.originalUrl) // '/admin/new'
  console.log('originalUrl', req.baseUrl) // '/admin'
  console.log('originalUrl', req.path) // '/new'
}

app.get('/', (req, res) => {
  checkPath(req)
  console.log('Hello world received a request.')
  const target = process.env.TARGET || 'World'
  res.send(`1 Hello ${target}!`)
})

app.get('/helloworld', (req, res) => {
  checkPath(req)
  console.log('Hello world received a request.')
  const target = process.env.TARGET || 'World'
  res.send(`2 Hello ${target}!`)
})

app.get('/helloworld/**', (req, res) => {
  checkPath(req)
  console.log('Hello world received a request.')
  const target = process.env.TARGET || 'World'
  res.send(`3 Hello ${target}!`)
})

app.get('/**', (req, res) => {
  checkPath(req)
  console.log('Hello world received a request.')
  const target = process.env.TARGET || 'World'
  res.send(`4 Hello ${target}!`)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Hello world listening on port', port)
})

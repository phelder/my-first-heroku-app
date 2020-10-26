const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('IT STILL WORKS!!!!!!')
})

app.get('/about', function(req, res) {
    res.send('THIS IS THE ABOUT ENDPOINT')
})

app.listen(port, function() {
    console.log(`Running on port ${port}`)
})
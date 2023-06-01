const express = require('express');

// initialise a instance of express module
const app = express();

const port = 3000

// define routes and methods
app.get('/', (req, res) => {
    res.send('hello GET Method')
})

app.post('/', (req, res) => {
    res.send('hello POST Method')
})

app.put('/', (req, res) => {
    res.send('hello PUT Method')
})

app.delete('/', (req, res) => {
    res.send('hello DELETE Method')
})

app.patch('/', (req, res) => {
    res.send('hello PATCH Method')
})

// serving static files over server
// -------direct path-------------
app.use(express.static('images'))

// -------virtual path-------------
app.use('/static', express.static('images'))







app.listen(port)
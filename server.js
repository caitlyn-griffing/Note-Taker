const express = require("express");
const api = require("./api/notes");
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000

// const id = require("./api/notes/id")

// built-in express middleware function serving CSS files
app.use(express.json())
app.use(express.static('public'))

// test-title note blocks
app.use('/api', api)

// localhost:3000/notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.listen(PORT);


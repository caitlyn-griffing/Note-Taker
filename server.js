const express = require("express");
const api = require("./api/notes");
const app = express();
const path = require('path')

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

// app.get('/:id', (res, req) => {
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// })



app.listen(3000);













    // you'll either be sending down some JSON or rendering a file with Express.js (mainly)
    // RENDER A FILE
    // res.render('index')

    // DOWNLOADABLE FILE send a file to user to download and pass the path
    // res.download('public/assets/js/server.js')

    // consoles {"message":"Error"}
    // res.json({ message: "Error" })
    
    // above the app api /api 
    // app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
// })
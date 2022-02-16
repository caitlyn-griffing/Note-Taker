const express = require("express");
const api = require("./api/notes");
const app = express();
const path = require('path')


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/api', api)

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.listen(3000);













    // you'll either be sending down some JSON or rendering a file with Express.js (mainly)
    // RENDER A FILE
    // res.render('index')

    // DOWNLOADABLE FILE send a file to user to download and pass the path
    // res.download('public/assets/js/server.js')

    // consoles {"message":"Error"}
    // res.json({ message: "Error" })
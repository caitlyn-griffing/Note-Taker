const express = require("express");
const app = express();

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     console.log("Caitlyn")
//     res.send("Caitlyn G")
// })

const routers = require("./routes/notesRouter")

app.use("/notesRouter", routers)

app.listen(3000);













    // you'll either be sending down some JSON or rendering a file with Express.js (mainly)
    // RENDER A FILE
    // res.render('index')

    // DOWNLOADABLE FILE send a file to user to download and pass the path
    // res.download('public/assets/js/server.js')

    // consoles {"message":"Error"}
    // res.json({ message: "Error" })
const express = require('express');
// make sure the R is capitalized
const router = express.Router();
// json file in the db folder
const db = require('../db/db.json');

router.use(express.json())


router.get('/', (req, res) => {
    res.json(db)
})

router.post('/', (req, res) => {
    db.push(req.body)
    res.json(db)
})

module.exports = router
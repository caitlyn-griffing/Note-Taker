const express = require('express');
// make sure the R is capitalized
const router = express.Router();
// json file in the db folder used to store and retrieve items
let db = require('../db/db.json');

const uniqid = require('uniqid')

router.use(express.json())

router
    .route('/notes')  
    
    .get((req, res) => {
        res.json(db)
    })
    .post((req, res) => {
        req.body.id = uniqid()
        // console.log(req.body)
        db.push(req.body)
        res.json(db)
    })
    
router.delete('/notes/:id', (req, res) => {
    const objectId = req.params.id
    // console.log(objectId)
    const newArray = db.filter(function (obj) {
        return obj.id !== objectId
    })
    db = newArray
    console.log(db)
    res.json(req.body)
})

// router.use('/:id', (req, res) => {
//     console.log(req.params.id)
// })

// router.route('/notes{id}').get((req, res) => {
//     req.body({id})
//     res.json(db)
// }).post((req, res) => {
//     db.push(req.body)
//     res.json(db)
// })


// router
//     .route('/:id')
//     .get((req, res) => {
//         db.push(req.body)
//         res.json(db)
//     })
//     .post((req, res) => {
//         db.push(req.body)
//         res.json(db)
//     })

module.exports = router


// router
//     .route('/:id')
//     .put((req, res) => {
//         db.push(req.body)
//         res.json(db)
//     })


    
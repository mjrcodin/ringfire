let router = require('express').Router()
let index = 

router.get('/',(req,res,next)=>res.sendFile('index.html'))

module.exports = router
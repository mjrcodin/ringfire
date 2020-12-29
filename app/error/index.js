let router = require('express').Router()

router.get('/',(req,res,next)=>res.send('<h1>Hello From Error page</h1>'))

module.exports = router
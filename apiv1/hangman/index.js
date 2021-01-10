let router = require('express').Router()
let words = require('./w')

router.get('/home',(req,res,next)=>res.send('<div id="page">Welcome to Index Page</div>'))
router.get('/words',(req,res,next)=>{
    res.setHeader('Content-Type', 'application/json');
    res.json({words:words})})
router.get('/page2',(req,res,next)=>res.send('<h1 id="page">Hello From API 2</h1>'))
router.get('/page3',(req,res,next)=>res.send('<h1 id="page">Hello From API 3</h1>'))

module.exports = router


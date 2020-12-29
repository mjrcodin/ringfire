let router = require('express').Router()

router.get('/home',(req,res,next)=>res.send('<div id="page">Welcome to Index Page</div>'))
router.get('/page1',(req,res,next)=>res.send('<h1 id="page">Hello From API 1</h1>'))
router.get('/page2',(req,res,next)=>res.send('<h1 id="page">Hello From API 2</h1>'))
router.get('/page3',(req,res,next)=>res.send('<h1 id="page">Hello From API 3</h1>'))

module.exports = router


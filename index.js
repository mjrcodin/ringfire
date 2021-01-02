require('dotenv').config()

let fs = require('fs')
let path = require('path')
let cors = require('cors')

let express = require('express')
let app = express()

let apiv1 = require('./apiv1')

let abs = path.resolve(__dirname, 'public','index.html')
let ringfire = fs.readFileSync(abs,'utf8')

cors()
app.use(cors())
app.use(express.static('./public'))
app.use(express.json())
app.use((req,res,next)=>{
    console.log('logging...')
    console.log(req.method,req.url, req.body) 
    next()
})

app.use('/apiv1', apiv1)
app.use('/', (req,res)=>res.send(ringfire))
app.use((req,res,next)=>res.send('<h1>Resource Not Found</h1>'))

app.listen(8080, ()=>{
    console.log('listening on 8080')
})
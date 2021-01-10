require('dotenv').config()

const fs = require('fs')
const path = require('path')
const cors = require('cors')
const http = require('http')
const io = require('socket.io')(http)

const PORT = process.env.PORT || 8080
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
io.on('connection', (socket)=>{
    console.log(socket)
})
app.use((req,res,next)=>res.send('<h1>Resource Not Found</h1>'))


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})
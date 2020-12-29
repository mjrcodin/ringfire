require('dotenv').config()

let fs = require('fs')
let path = require('path')
let cors = require('cors')

let express = require('express')
let app = express()

let apiv1 = require('./app/apiv1')
let web = require('./app/web')
let error = require('./app/error')

let abs = path.resolve(__dirname, 'app','web', 'public', 'index.html')
let index = fs.readFileSync(abs,'utf8')

cors()
app.use(cors())
app.use(express.static('./app/web/public'))
app.use(express.json())
app.use((req,res,next)=>{
    console.log('logging...')
    console.log(req.method,req.url, req.body) 
    next()
})

app.use('/apiv1', apiv1)
app.use('/', (req,res)=>res.send(index))
app.use((req,res,next)=>res.send('<h1>Resource Not Found</h1>'))

app.listen(8080, ()=>{
    console.log('listening on 8080')
})
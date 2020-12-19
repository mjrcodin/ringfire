require('dotenv').config()
let http = require('http')
let router = require('./router')

let PORT = process.env.PORT || 3000
let HOST = process.env.HOST || 'localhost'

let server = http.createServer((req,res)=>{

    req.data = ''
    req.on('data', chunk => {
        req.data += chunk.toString()
    })
    req.on('end', ()=>{
        router(req,res)
    })
})

server.listen(PORT,()=>{
    console.log(`Listening on ${HOST}:${PORT}`)
})
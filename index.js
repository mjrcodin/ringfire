require('dotenv').config()
let http = require('http')
var path = require('path');
var fs = require('fs');
let router = require('./router')
var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

let PORT = process.env.PORT || 3000
let HOST = process.env.HOST || 'localhost'

let server = http.createServer((req,res)=>{

    if(req.method == 'GET'){

        var reqpath = req.url.toString().split('?')[0];

        var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
        if (file.indexOf(dir + path.sep) !== 0) {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('Forbidden');
        }
        var type = mime[path.extname(file).slice(1)] || 'text/plain';
        var s = fs.createReadStream(file);
        s.on('open', function () {
            res.setHeader('Content-Type', type);
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });

    }
    if(req.method == 'POST'){
        req.data = ''
        req.on('data', chunk => {
            req.data += chunk.toString()
        })
        req.on('end', ()=>{
            router(req,res)
        })

    }

})

server.listen(PORT,()=>{
    console.log(`Listening on ${HOST}:${PORT}`)
})
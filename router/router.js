let url = require('url')
let routes = require('./routes')

module.exports = function router(req,res){

    let urlParse = url.parse(req.url)
    urlParse.query ? req.params = urlParse.query.split('&') : null
    req.urlParse = urlParse

    let path = ''
    let success = false

    if(req.params && req.params.length > 0){

        let qry = '?' + req.params[0].split("=")[0]
        path = req.urlParse.pathname + qry  

    }else{

        path = req.urlParse.pathname
    }

    res.setHeader('Content-Type', 'application/json');

    routes.forEach(route =>{
        if(route.pathname == path && route.verb == req.method){
            success = true
            route.ctrl(req,res)
        }
    })
    if(!success){
        res.end(JSON.stringify({success:false, msg:'resource not found'}))
    }
}
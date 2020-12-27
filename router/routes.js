

module.exports = [
        { verb: 'POST', pathname: '/', ctrl: (req,res)=>res.end(JSON.stringify({verb: 'GET', url: '/', body: req.data})) },
        { verb: 'GET', pathname: '/apiv1/products/?id', ctrl: (req,res)=>res.end(JSON.stringify({verb: 'GET', url: '/apiv1/products/?id'})) },    
    ]
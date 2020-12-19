

module.exports = [
        { verb: 'GET', pathname: '/', ctrl: (req,res)=>res.end(JSON.stringify({verb: 'GET', url: '/'})) },
        { verb: 'GET', pathname: '/apiv1/products/?id', ctrl: (req,res)=>res.end(JSON.stringify({verb: 'GET', url: '/apiv1/products/?id'})) },    
    ]
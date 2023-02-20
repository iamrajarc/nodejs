const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home page')
        return
    }
    if(req.url==='/about'){
        res.end('Here is our short history')
        return
    }
    res.end(`
    <h1>Oops!Unable to find the page you are requested</h1>
    <p>We can't find the home page you requested</p>
    <a href="/">Back Home</a>`)

})

server.listen(5000)
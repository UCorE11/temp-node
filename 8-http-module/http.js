// to see the ouput of this code open chrome and type localhost:5000
const http=require('http')                // req is the incoming request and the res is the response we are sending back
const server =http.createServer((req,res)=>{ 
if(req.url==='/') // to check if it is homepage
{
    res.end('Welcome to our home page')
}
if(req.url==='/about')   // this is for about page, to see the ouput type localhost:5000/about
{
    res.end('here is our short history')
}
// to see this as output type localhost:5000/whateveryouwant
res.end(`<h1>Oops!</h1>              
<p>We cant seem to find the page you are looking for</p>
<a href="/">back home</a>`)
})  
server.listen(5000)

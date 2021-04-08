// http request modules
/*
    Request ---> get(),post(),delete(),put(),head()
*/
// http response modules
/*
    Response send us status code and data
    
    http Staus code:
    1. Informational response (100-199)
    2. Successful response (200-299)
    3. Redirects (300-399)
    4. Client Errors (400-499)
    5. Server Errors (500-599)
*/
const http = require('http')
const port = 3002
const hostname = '127.0.0.1'

exports.server2 = () => {
    return http.createServer((req, res)=>{
        res.writeHead(202, {'Content-Type':'text/html'})
        res.write('<h1>Hello Sir, I am server2</h1>')
        res.end()
    }).listen(port,hostname,
        console.log(`Your server2 is successfully running at http://${hostname}:${port}`))}
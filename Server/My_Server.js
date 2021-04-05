const http = require('http');
const port = 3001;
const hostName = '0.0.0.0';

const myServer = () => {
   return  http.createServer((req, res)=>{
        res.end('<h1>Hello! I am your First server...</h1>')
    }).listen(port, hostName,()=> console.log(`server is running successfully at http://${hostName}:${port}`));
}

exports.ms = myServer;
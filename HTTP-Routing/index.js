const fs = require('fs')
const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{

   const handleFileRead = (statusCode,fileLocation) => {
      fs.readFile(fileLocation,(err,data)=>{
         res.writeHead(statusCode, {"Content-Type":"text/html"})
         res.write(data)
         res.end()
      })
   }

   if(req.url=== '/'){
         handleFileRead(200,"./views/index.html")
      }
   else if(req.url=== '/about'){
         handleFileRead(200,"./views/about.html")
   }
   else if(req.url=== '/contact'){
         handleFileRead(200,"./views/contact.html")
   }
   else {
         handleFileRead(404,"./views/error.html")
   }
})

server.listen(port,hostname,()=>{
   console.log(`server is running successfully at http://${hostname}:${port}`)
})

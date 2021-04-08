const server = require('./app')
const port = 3002


server.app.listen(port, ()=>{
    console.log(`your server is running at http://localhost:${port}`);
})

const express = require('express')
const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log(`your server is running at http://localhost:${port}`);
})
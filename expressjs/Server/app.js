const express = require('express')
const userRouter = require('./routes/users-route')
const app = express()
const port = 4002

app.use("/api/user",userRouter)

app.get('/',(req, res)=>{
    res.send('I am get request at home route')
})

app.use((req, res)=>{
    res.send('<h1>404!!! Not a valid url.</h1>')
})

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`))


module.exports = {app}
const express = require("express");
const route  = require("./routes/user_route");
const app = express()

app.use(route)
app.use((req,res)=>{
    res.send("404!!! Not a valid url")
})
module.exports = app
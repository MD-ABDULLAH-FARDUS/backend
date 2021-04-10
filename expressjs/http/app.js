const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    // const id = req.query.id;
    res.send(`I am get request at home route`)
})
app.post("/",(req, res)=>{
    // const id = req.query.id;
    res.send(`I am post request at home route`)
})
app.put("/",(req, res)=>{
    // const id = req.query.id;
    res.send(`I am put request at home route`)
})
app.delete("/",(req, res)=>{
    // const id = req.query.id;
    res.send(`I am delete request at home route`)
})

 


module.exports = app 
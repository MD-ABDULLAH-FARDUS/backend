# Express Router and Route
## Require Express and use get method

Here we made some route where we put some string data. We also made route for not valid url.
```javascript
const express = require("express");
const app = express()

app.get("/",(req,res)=>{
    res.send("Home Route")
})
app.get("/register",(req,res)=>{
    res.send("Register Route")
})
app.get("/login",(req,res)=>{
    res.send("Login Route")
})
app.use((req,res)=>{
    res.send("404!!! Not a valid url")
})
module.exports = app
```

## Router use
```javascript
const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Home Route")
})
router.get("/register", (req, res) => {
    res.send("Register Route")
})
router.get("/login", (req, res) => {
    res.send("Login Route")
})

module.exports = router
```
```javascript
const express = require("express");
const route  = require("./routes/user_route");
const app = express()

app.use(route)
```
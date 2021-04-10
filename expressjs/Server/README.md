# Creating Server using node and express
# npm init
```javascript 
npm init
or
npm init -y 
```
## Install External Modules
    npm install nodemon express
## Require Install Modules
```javascript
const express = require("express");
const app = express();
const port = 3000;
```
## setup nodemon in package.json
```json
"scripts":{
    "start": "nodemon index.js"
}
```
## server create and start
```javascript
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
```
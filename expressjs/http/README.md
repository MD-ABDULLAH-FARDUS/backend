# HTTP methods and postman
### http methods are - 
- get 
- put
- post 
- delete
  
### get method
req(request),res(response) two things are done by this get methods
```javascript
app.get("/",(req,res)=>{ // here "/" is address which means home route
    res.send('I am get request at home route')
})
```
### post method
post method is using for creating data or storing data
```javascript
app.post("/",(req,res)=>{
    res.send('I am post request at home rout')
})
```
### put method
put method is using for updating data 
```javascript
app.put("/",(req,res)=>{
    res.send('I am put request at home rout')
})
```
### delete method
delete method is using for deleting data 
```javascript
app.put("/",(req,res)=>{
    res.send('I am put request at home rout')
})
```
### Checkout post, put & delete method 
Our server could handle only get method. Others three methods post, put and delete method could not handle. To checkout our client side request method we use **POSTMAN** software. 
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
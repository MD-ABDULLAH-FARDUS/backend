const fs = require('fs');


const fileSystem = () => {
    // Create file
    fs.writeFile('demo.txt','This is demo text. ',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
    // Update file
    fs.appendFile('demo.txt','This text is included by appendFile method.',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
    // Read file
    fs.readFile('demo.txt','utf-8',(err, data)=>{
       return (err ? console.log('err') : console.log(data))
    })
    
}





module.exports = {
    fileSystem
}
const fs = require('fs');


const fileSystem = () => {
    // Create file
    fs.writeFile('demo.txt','This is demo text',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
}





module.exports = {
    fileSystem
}
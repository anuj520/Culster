const express = require('express')
const Culster = require('node:cluster')
const os = require('os')

const CPU = os.cpus().length;


if (Culster.isPrimary) {
 for(let i = 0;i<CPU;i++){
Culster.fork(); // hum ek worker processer bana reha ha
} 
}else{
    const app = express()
const PORT = 5000;
app.get('/',(req,res)=>{
    res.send(`hello express server ${process.pid}`);   
   })
   
   app.listen(PORT,()=>{
       console.log('server run port 5000;');
       
   })
}

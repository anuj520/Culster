const express = require('express')

const app = express()
const PORT = 5000;

app.get('/',(req,res)=>{
 res.send(`hello express server ${process.pid}`);   
})

app.listen(PORT,()=>{
    console.log('server run port 5000;');
    
})
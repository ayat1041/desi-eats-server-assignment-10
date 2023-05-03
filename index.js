const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('desi_eats_server_green');
});

app.listen(port,()=>{
    console.log(`desi_eats running on port: ${port}`)
})
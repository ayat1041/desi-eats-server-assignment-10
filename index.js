const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');
app.get('/',(req,res)=>{
    res.send('desi_eats_server_green');
});

app.get('/chef',(req,res)=>{
    res.send(chef);
});

app.listen(port,()=>{
    console.log(`desi_eats running on port: ${port}`)
})
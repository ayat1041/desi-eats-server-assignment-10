const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');
const tips = require('./data/tips.json');
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('desi_eats_server_green');
});

app.get('/chef',(req,res)=>{
    res.send(chef);
});
app.get('/tips',(req,res)=>{
    res.send(tips);
});
app.get('/chef/:id',(req,res)=>{
    const id = req.params.id
    const data = chef.chefs.find(c => c.id == id);
    res.send(data);
});

app.listen(port,()=>{
    console.log(`desi_eats running on port: ${port}`)
})
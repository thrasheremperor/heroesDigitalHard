const express=require('express');
const app=express();
const main=require('./routes/main');
const heroControl=require('./routes/heroes');

app.listen(3000,()=>console.log('Running in port 3000'));

app.use(main);
app.use(heroControl);
const express = require('express');
const cors = require('cors');
const app=express();
const port=process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send({
        message: 'welcome to my server'
    })
})
app.get('/products',(req,res)=>{
    res.send('e-commerce server running')
})

app.listen(port,()=>{
    console.log(`e-commerce server running port: ${port}`);
})
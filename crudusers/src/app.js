const express = require('express');

const app = express();

const crudRouter = require('./mvc/users.router')

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        pag_Menu:"http://127.0.0.1:9000/crud",
        message:'Server Ok'
            
    });
})


app.use("/", crudRouter)
app.listen(9000, ()=>{
    console.log('Server started at puerto 9000');
});
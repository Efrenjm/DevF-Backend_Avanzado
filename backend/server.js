const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();


app.use('api/tareas', require('./routes/tasksRoutes'));


// app.get("/api/tareas", (req,res)=>{
//     res.json({'message': 'get tareas'});
// })
app.listen(port, ()=> console.log(`servidor iniciado en el puerto ${port}`));


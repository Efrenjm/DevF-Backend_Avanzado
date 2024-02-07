const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//console.log('hi');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('api/tasks', require('./routes/tasksRoutes'));
app.use('api/users', require('./routes/usersRoutes'));
app.use(errorHandler);

// app.get("/api/tareas", (req,res)=>{
//     res.json({'message': 'get tareas'});
// })
app.listen(port, ()=> console.log(`Listen in port ${port}`));


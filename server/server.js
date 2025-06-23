const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const transactionRoute = require('./routes/transactionRoute')

connectDB()

app.use(express.json())

app.use('/api/auth',authRoute);
app.use('/api/transaction',transactionRoute);

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server listening at port : ${port}`);
});
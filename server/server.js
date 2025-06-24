const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const transactionRoute = require('./routes/transactionRoute')
const cors = require('cors');
connectDB()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use('/api/auth',authRoute);
app.use('/api/transactions',transactionRoute);

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server listening at port : ${port}`);
});
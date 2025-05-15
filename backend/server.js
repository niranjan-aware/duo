import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.use('/api/auth',authRoutes);
// app.use('/api/users');
// app.use('/api/matches');
// app.use('/api/messages');

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
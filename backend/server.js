import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 8000 ;
connectDB();
const app = express();

app.use(cors());

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {

    res.send("api in running");

});

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`listening on ${port}`));
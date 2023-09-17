import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 8000 ;
connectDB();
const app = express();

app.use(cors());

app.use('/api/products', productRoutes);

app.get("/", (req, res) => {

    res.send("api in running");

});

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`listening on ${port}`));
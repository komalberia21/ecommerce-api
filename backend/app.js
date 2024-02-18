import express from "express";
import dotenv from "dotenv";

import productRoutes from "./src/product/routes/product.routes.js";
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from "./middlewares/errorHandlerMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());

// configure routes
app.use("/api/ecommerce", productRoutes);
// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;

import express from 'express'
import { connection } from './db/connection.js';
import userRoutes from './src/modules/user/user.routes.js';
import { configDotenv } from 'dotenv';
import cors from 'cors'
import categoryRoutes from './src/modules/category/category.routes.js';
configDotenv()
const app = express()
const port = 3000;
app.use(cors())
app.use(express.json())



connection()

app.use("/api/v1/user",userRoutes)
app.use("/api/v1/service",categoryRoutes)





app.use("*", (req, res, next) => {
    res.json({ err: `invaild url   ${req.originalUrl}` });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
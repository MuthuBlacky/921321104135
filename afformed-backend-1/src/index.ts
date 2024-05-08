import express from "express";
import cors from "cors";
import {router} from "../routes/routes"
const app = express();
const PORT = 5001

app.use(cors())
app.use(express.json())
app.use("/categories",router)

app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
})
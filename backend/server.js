import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import movies from "./routes/movies.route.js"
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get("/" , (req,res)=>{
    res.status(200).json("welcome api daniel")
})

app.use("/movies",movies)

app.listen(PORT , ()=>{
    console.log(`server is runing on port ${PORT}`)
})
import express from "express"
import { GetMovies } from "../controllers/movies.controller.js"

const router = express.Router()

router.get('/' , GetMovies)

export default router
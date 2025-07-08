import express from "express"
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"

const app = express()


connectDB()

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(ENV.PORT, () => {
    console.log(`Server is running: http://localhost:${ENV.PORT}`)
})

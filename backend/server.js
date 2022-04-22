import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

// i moduli che express userà per l'app
app.use(cors())

// questo modulo consente al server di accettare linguaggio json nel body delle richieste 
app.use(express.json())

// definisco le route
app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

// configurando dotnev avremo accesso alle variabili di environment
dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

// accediamo al database tramite la URI
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
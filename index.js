import express from 'express'

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(PORT, ()=> console.log("Server running ok..."))
app.on("Error", (error) => console.log(`No se conectó el servidor debido a ${error}`))


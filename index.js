import express from "express"
import usuariosRoutes from "./routes/usuarios.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", usuariosRoutes)

app.listen(PORT, ()=> console.log("Server running ok...\n"))
app.on("Error", (error) => console.log(`No se conectó el servidor debido a ${error}`))


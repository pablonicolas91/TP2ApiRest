import express from "express"
import usuariosControllers from "../controllers/usuarios.controller.js"

const router = express.Router()

// try {
    router.get("/usuarios", usuariosControllers.getUsuarios) 
    router.post("/usuarios/nuevoUsuario", usuariosControllers.postUsuario)

// }  catch(error) {
//     console.log(error.message)
// }


export default router
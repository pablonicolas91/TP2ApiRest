import express from "express"
import usuariosControllers from "../controllers/usuarios.controller.js"

const router = express.Router()


router.get("/usuarios", usuariosControllers.getUsuarios) 
router.post("/usuarios/agregarUsuario", usuariosControllers.postUsuario)
router.patch("/usuarios/modificarParteDeUsuarioCon/:id", usuariosControllers.patchUsuario)

export default router
import usuariosServices from "../services/usuarios.service.js"


const getUsuarios = async(req, res) => {
    const usuarios = await usuariosServices.getUsuarios()
    res.status(200).send(usuarios)
}


const postUsuario = async(req, res) => {
    const usuarioAAgregar = req.body

    if (JSON.stringify(req.body) == "{}") {
        throw new Error("EmptyObjectError: No se puede insertar objetos vacíos")
    }

    const nuevoUsuario = await usuariosServices.postUsuario(usuarioAAgregar)
    res.send(nuevoUsuario)
    console.log("Nuevo Usuario agregado: \n")
}

export default {
    getUsuarios,
    postUsuario
}
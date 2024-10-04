import usuariosServices from "../services/usuarios.service.js"


const getUsuarios = async(req, res) => {
    const usuarios = await usuariosServices.getUsuarios()
    res.status(200).send(usuarios)
}


const postUsuario = async(req, res) => {

    try {
        const usuarioAAgregar = req.body
    
        if (JSON.stringify(req.body) == "{}") {
            throw new Error("\nEmptyObjectError: No se puede insertar objetos vacíos\n")
        }

        const nuevoUsuario = await usuariosServices.postUsuario(usuarioAAgregar)
        res.status(200).send(nuevoUsuario)
        console.log(JSON.stringify(nuevoUsuario))

    } catch(error){
        res.status(400).send(error.message)
        console.log(error.message)
    }
}


const patchUsuario = async(req, res) => {
    const { id } = req.params
    const data = req.body
    const usuarioActualizadoParcialmente = await usuariosServices.patchUsuario(id, data)
    res.status(200).send(usuarioActualizadoParcialmente)
    console.log(usuarioActualizadoParcialmente)
}


export default {
    getUsuarios,
    postUsuario,
    patchUsuario
}
import usuariosServices from "../services/usuarios.service.js"


const getUsuarios = async(req, res) => {
    const usuarios = await usuariosServices.getUsuarios()
    res.status(200).send(usuarios)
}


const postUsuario = async(req, res) => {

    try {
        const usuarioAAgregar = req.body

        if (JSON.stringify(req.body) == "{}") {
            throw new Error("EmptyObjectError: No se puede insertar objetos vacíos")
        }

        const nuevoUsuario = await usuariosServices.postUsuario(usuarioAAgregar)
        res.status(200).send(nuevoUsuario)
        console.log(nuevoUsuario)

    } catch(error){
        res.status(400).send({statusCode: 400, message: error.message})
        console.log(`\n${error.message}\n`)
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
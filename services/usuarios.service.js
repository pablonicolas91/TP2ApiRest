import usuariosModels from "../models/usuarios.model.js"

const getUsuarios = async() => {
    return usuariosModels.getUsuarios()
}

const postUsuario = async(usuario) => {
    return usuariosModels.postUsuario(usuario)
}




export default {
    getUsuarios,
    postUsuario
}
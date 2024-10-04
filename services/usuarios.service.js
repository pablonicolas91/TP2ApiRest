import usuariosModels from "../models/usuarios.model.js"

const getUsuarios = async() => {
    return usuariosModels.getUsuarios()
}

const postUsuario = async(usuario) => {
    return usuariosModels.postUsuario(usuario)
}

const patchUsuario = async(id, data) => {
    return usuariosModels.patchUsuario(id, data)
}


export default {
    getUsuarios,
    postUsuario,
    patchUsuario
}

const usuarios = [
    {id:1, legajo:33585, nombreCompleto: "Jorge Fernandez", edad:25, nota: 7},
    {id:2, legajo:34752, nombreCompleto: "Tamara Jerez", edad: 20, nota: 10},
    {id:3, legajo:32568, nombreCompleto: "Leonel Romero Perez", edad: 40, nota: 8}
]


const getUsuarios = async () => {
    return usuarios
}

const postUsuario = async (nuevoUsuario) => {
    if(!existe(nuevoUsuario)){
        nuevoUsuario.id = usuarios[usuarios.length - 1].id + 1
        usuarios.push(nuevoUsuario)
        return nuevoUsuario
    
    } else return {
        errorMessage:"El usuario que se intenta agregar ya existe en la base de datos"
    }
}

const patchUsuario = async (id, data) => {
    const indiceUsuario = usuarios.findIndex(user => user.id == id)
    if (indiceUsuario != -1){
        const usuarioActualizado = {...usuarios[indiceUsuario], ...data}
        usuarios.splice(indiceUsuario, 1, usuarioActualizado)
        return usuarioActualizado
    
    } else return {
        errorMessage:`No se encontró usuario con id ${id}`
    }
}

const existe = (usuario) =>{
    return usuarios.find(user => user.legajo == usuario.legajo)
}

export default {
    getUsuarios,
    postUsuario,
    patchUsuario
}

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
    
    } else return "El usuario que se intenta agregar ya existe en la base de datos"
}


const existe = (usuario) =>{
    return usuarios.find(user => user.legajo == usuario.legajo)
}

export default {
    getUsuarios,
    postUsuario
}
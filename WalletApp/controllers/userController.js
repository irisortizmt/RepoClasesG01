import userModel from "../models/userModel.js"


export async function createUser(req, res){
    //IMPLEMENTAR AQUI
    const {nombre, edad, ciudad} = req.body.usuario 

//Conexion con la base de datos
    const usuario = await userModel.create({
        nombre,
        edad,
        ciudad
    })
    res.status(201).json(usuario)
}

export function readUser(res){
    //IMPLEMENTAR AQUI
    res.sendStatus(200)
}

export function updateUser(res){
    //IMPLEMENTAR AQUI
    res.sendStatus(200)
}

export function deleteUser(res){
    //IMPLEMENTAR AQUI
    res.sendStatus(200)
}
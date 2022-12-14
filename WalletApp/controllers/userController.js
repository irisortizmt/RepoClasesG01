import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  //IMPLEMENTAR AQUI

  // if (usuario == null){
  //     res.status(200).json({
  //         "error": "Falta el objeto usuario en el cuerpo de la peticion"
  //     })
  //     return
  // }

  //Conexion con la base de datos y error de validacion de todos los campos
  
  try {
    const usuario = req.body.usuario;
    const { password } = usuario;
    const encriptedPassword = await bcrypt.hash(password, 10);
    usuario.password = encriptedPassword;
    const documento = await userModel.create(usuario);
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
}


export async function readUser(req, res) {
  const id = req.params.id;
  let documento;
  try {
    documento = await userModel.findOne({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

export async function userList(req, res) {
 
  let documento;
  try {
    documento = await userModel.find({},{_id:0, password:0, _v:0} );
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

export async function updateUser(req, res) {
  //findAndUpdate
  //findAnd....Update
  //updateOne
  const id = req.params.id;
  const updates = req.body.updates;

  let documento;
  try {
    // Para aplicar las validaciones a las actualizaciones
    // documento = await userModel.updateOne({"_id":id}, updates, {runValidators:true})
    documento = await userModel.updateOne({ _id: id }, updates);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}

export async function deleteUser(req, res) {
  //IMPLEMENTAR AQUI
  const id = req.body.id;

  let documento;
  try {
    documento = await userModel.findOneAndDelete({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}

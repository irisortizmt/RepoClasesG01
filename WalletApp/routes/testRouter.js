import express from "express"
import userModel from "../models/userModel.js"

const testRouter = express.Router()
//Para traeer la lista de todos los usuarios solo con la barra "/" y find ()

// testRouter.get("/", async (req, res) =>{
//     let documentos;
//     try {
//         documentos = await userModel.find()
//     } catch (error) {
        
//     }
//     res.json(documentos)
//         return
// })


//Para buscar por nombre
testRouter.get("/:nombre", async (req, res) =>{
    const nombre = req.params.nombre
    let documentos;
    try {
        documentos = await userModel.find({nombre})
    } catch (error) {
        
    }
    res.json(documentos)
        return
})
// Encontrar todos los documentos que la edad sea igual a la variable
testRouter.get("/", async (req, res) =>{
    const variable = req.body.variable
    let documentos;
    try {
        //documentos = await userModel.find({"edad":variable})
        //$gt busca los que tienen mayor valor a la variable
        documentos = await userModel.find({"edad":{ $gt:variable}})
    } catch (error) {
        
    }
    res.json(documentos)
        return
})

export default testRouter
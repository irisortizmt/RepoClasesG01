import express from "express"
import {crearPublicacion, leerPublicacion, leerPubliccaciones} from "../controllers/homeController.js"

let router = express.Router()

//localhost:3000/home...

router.get("/", (req, res) =>{
    //Implementar el codigo:
    res.send("Estas en el apartado HOME")
})
    
router.get("/G01", (req, res) =>{
    //Implementar el codigo:
    res.send("Bienvenido a la clase G01")
})

router.post("/nuevo", function (req, res) {
    crearPublicacion(req, res);
})

router.get("/lista", (req, res) =>{
    leerPubliccaciones(req, res)
})

router.get("/lista/:id", (req, res) =>{
    leerPublicacion(req, res)
})

export default router;
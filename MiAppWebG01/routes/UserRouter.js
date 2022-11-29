import express from "express"
const router = express.Router()

//localhost:3000/usuario...

const usuario = {
    nombre:"Maria Jose",
    correo: "mj@correo.com",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota:{
        nombre: "Calvin",
        raza: "Pitbull",
        edad: 7
    }
 }

router.get("/", (req, res) =>{
    //Implementar el codigo:
    res.json(usuario)
 })

router.get("/mascota", (req, res) =>{
    //Implementar el codigo:
    res.json(usuario.mascota)
    //res.json(usuario.nombre)
    //res.json(usuario.mascota)
    //res.json(usuario.mascota.nombre)
})

router.get("/nombre", (req, res) =>{
    //Implementar el codigo:
    res.json(usuario.nombre)
})

router.get("/agrupar", (req, res) =>{
    //Implementar el codigo:
    res.send("Usted esta en la pestaña de AGRUPAR!")
})

router.get("/agrupar/:args", (req, res) =>{
    let nombres = req.params.args
    nombres = nombres.split(" ")
    //nombres = Juan,Pedro,Camilo
    //nombres = ["Juan", "Pedro", "Camilo"]
    res.json(nombres)
})



export default router
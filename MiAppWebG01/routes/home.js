import express from "express"

let router = express.Router

//localhost:3000/home...

router.get("/", (req, res) =>{
    //Implementar el codigo:
    res.send("Estas en el apartado HOME")
})
    
router.get("/G01", (req, res) =>{
    //Implementar el codigo:
    res.send("Bienvenido a la clase G01")
})

export default router;
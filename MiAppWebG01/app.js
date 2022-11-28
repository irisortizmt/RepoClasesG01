import express from "express";
import UserRouter from "./routes/UserRouter.js";
import homeRouter from "./routes/home.js";
const app = express();
const puerto = 3000;

/*function suma (a,b,callback){
    callback();
    return a+b;
}
//Suma con funcion flecha
suma( 10, 15, ()=> {
    console.log("callback");
})*/

//suma con funcion flecha con parametros de entrada
// function suma (a,b,callback){
//     const resultado = a+b
//     callback(a,b,resultado);
// }

// suma( 10, 15, (a,b,resultado)=> {
//     console.log("El valor a: " +a);
//     console.log("El valor b: " +b);
//     console.log("El resultado es: " +resultado);
// })


app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
})

app.get("/", (req, res) =>{
//Implementar el codigo:
res.send("Hola, Mundo!")
})

app.get("/direccion", (req, res) =>{
//Implementar el codigo:
res.redirect("/home/G01")
 })

app.use("/usuario",UserRouter)
app.use("/home",homeRouter)


    

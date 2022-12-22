import mongoose from "mongoose";

/*const perfil = mongoose.Schema({
    "mensaje":{type:String, required:true},
    "estado": String
})*/

const ciudadesPosibles = ["Bogotá", "Cali", "Medellin", "Barranquilla", "Bucaramanga"]

const userModel = mongoose.Schema({
  nombre: { type: String, required: true },
  // "edad":{type:Number, required:true},
  // "ciudad":{type:String, required:true},
  // "correo":{type:String, required:true},
  password: {
    type: String,
    required: true,
  },
  ciudad:{type:String, required:true, enum:ciudadesPosibles}
});

// VALIDACION
// String, Number, required
// "objeto":perfil
// "activo":Boolean
// "notas": [Number]
// "notas": Array
// "fechaCreacion": Date
// "nombre":{default:"Pepito"},
// "nombre":{minLength:3, maxLength:30} Para String,
// "edad":{min:18, max:90},
// "ciudad":{enum:ciudadesPosibles}

//CREANDO VALIDADORES
// function validacionPar(numero){
//     if(numero %2 == 0){
//         return true
//     }else{
//         return false
//     }
// }

//edad:{type:Number, validate: {validator: validacionPar, message: "La edad debe ser un numero par"}}

export default mongoose.model("users", userModel);

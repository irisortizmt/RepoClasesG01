import Avion from "./Avion.js";
import Servicio from "./Servicio.js";

class ServicioAereo extends Servicio{
    constructor(){
        super();
    }

    obtenerTransporte(){
        return new Avion (this.idServicio)
    }
}
export default ServicioAereo;
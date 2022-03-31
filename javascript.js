class Cliente {
#nombre;

    constructor (nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    calcularImpuesto (){
        return ((this.impuesto.montoBrutoAnual-this.impuesto.deducciones)*0.21)
    }
}

class Impuestos {
#montoBrutoAnual;
#deducciones;
    constructor (montoBrutoAnual, deducciones){
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }
    get impuestos(){
        return {montoBrutoAnual: this.#montoBrutoAnual,
        deducciones: this.#deducciones,
    }
}
}
const Cliente1Impuestos = new Impuestos (36_000_000, 6_000_000);
const Cliente1 = new Cliente ("Joaquín Cruzat", Cliente1Impuestos.impuestos);

const impuestosCliente1 = Cliente1.calcularImpuesto();

console.log ({impuestosCliente1})



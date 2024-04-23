/*Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si
edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo
contrario retornar 0.*/
function calcularImpuestos(edad, ingresos){
    if (edad >= 18){
        if (ingresos >= 1000){
            return ingresos*0.40;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}
function validacion(mensaje){
    while (true){
        let input = prompt(mensaje);
        try{
            let numero = parseInt(input);
            if (isNaN(numero)){
                throw new Error("Debe ingresar un numero entero");
            }
            return numero;
        } catch (error){
            alert(error.message);
        }
    }
}
let mensajeInput = "Ingrese la Edad"
let edadUser = validacion(mensajeInput);
mensajeInput = "Ingrese los ingresos";
let ingresosUser = validacion(mensajeInput);
alert("El porcentaje de impuestos es: "+calcularImpuestos(edadUser,ingresosUser))


//eventos DoomContentLoaded para cargar contenido de la página cuando el HTML esta cargado

document.addEventListener("DOMContentLoaded", function() {

    //tomar elementos del DOM 

    let displayText = document.getElementById("displayText"); //obtener el texto del display para manipularlo
    let botones = document.querySelectorAll("button"); //toma todos los botones del DOM

    let operacion = ""; // variable que servira para almacenar la operacion que se esta realizando

    botones.forEach((boton) => { //manejarlols como for each debido a la cantidad de botones
        boton.addEventListener("click", function() { // funcion para botones individuales 

            let valor = boton.textContent; //tomar el valor de los botones
             
                if (valor == "C") { // evalua si el valor es C borrar todos los elementos almacenados
            
                    operacion = ""; //borra la operacion
                }
                else if (valor == "=") { // en caso de que el valor sea igual, evalua la operacion
                    try {
                        operacion = eval(operacion); //evalua las operaciones almacenadas como string 

                    }
                    catch {
                        swal ("ERROR....") //si hay un error en la operacion, muestra un mensaje de error
                        operacion = ""; //borra la operacion
                    }
                }
               else {
                operacion += valor; //en caso que no sea C o igual, agrega el valor a la operacion
               }

               displayText.textContent = operacion; //muestra la operacion en el display
    });
});

});

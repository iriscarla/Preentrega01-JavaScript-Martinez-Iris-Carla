let menuInicio = prompt('Bienvenido al bar! Puede optar por: \n a: Ver la carta de papas \n b. Catalogo de cervezas  \n c. Quiero salir  ');

if (menuInicio !== undefined && menuInicio !== '') {
    if (menuInicio.trim().toLocaleLowerCase() == 'a') {
        mostarCartaPapas()
    }
    else if (menuInicio.trim().toLocaleLowerCase() == 'b') {
        mostarCartaCervezas()
    }
    else if (menuInicio == 'c') {
        alert('Chau')
    }
    else {
        alert('Esperamos verte de nuevo pronto! 🎉')
    }
}


//Funcion para ver la carta de papas.
function mostarCartaPapas() {
    let eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas Americanas  \n 3. Papas con Cheddar \n 4. Salchipapas \n 5: Para SALIR');

    if (eleccionCliente !== null || undefined || false) {
        while (eleccionCliente !== '5') {

            switch (eleccionCliente) {
                case '1':
                    alert("Papas Clásicas $2000");
                    break

                case '2':
                    alert("Papas Americanas $ 2500");
                    break

                case '3':
                    alert("Papas con Cheddar $ 3000");
                    break

                case '4':
                    alert("Salchipapas $4000");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas Americanas  \n 3. Papas con Cheddar \n 4. Salchipapas \n 5: Para SALIR');
        }

    }
}


//Funcion para ver la carta de cervezas.
 function mostarCartaCervezas() {
    let beer = prompt('Puede elegir entre \n 1: APA \n 2. IPA  \n 3. Golden \n 4. Irish Red \n 5. Barley Wine \n 5: Para SALIR');
    if (beer!== null || undefined || false)
        while (beer !== '5') {

            switch (beer) {
                case '1':
                    alert("Cerveza 'APA, Precio $1500, Volumen de alcohol: 3.5");
                    break

                case '2':
                    alert("Cerveza 'IPA', Precio $1200, Volumen de alcohol: 4.5");
                    break

                case '3':
                    alert("Cerveza 'GOLDEN', Precio $1000, Volumen de alcohol: 2.0");
                    break

                case '4':
                    alert("Ud. ordenó: Cerveza Irish Red $ 1300");
                    break

                case '5':
                    alert("Ud. ordenó: Cerveza Barley Wine $ 1350");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            beer = prompt('Puede elegir entre \n 1: Cerveza Rubia \n 2. Cerveza Negra  \n 3. Cerveza Roja \n 5: Para SALIR');

        }

}

// Funcion para buscar una cerveza por nombre
function buscarCerveza (nombre){

     const filtrado = cerverzas.filter((cerveza) => cerveza.nombre.includes(nombre));
     return filtrado;
    ;
}





// funcion para añadir al carrito
const carrito = [];

function agregarAlCarrito (){

}





function elegirCartaPapas() {
    let eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas Americanas  \n 3. Papas con Cheddar \n 4. Salchipapas \n 5: Para SALIR');

    if (eleccionCliente !== null || undefined || false) {
        while (eleccionCliente !== '5') {

            switch (eleccionCliente) {
                case '1':
                    alert("Ud. ordenó: Papas Clásicas $ 2000");
                    break

                case '2':
                    alert("Ud. ordenó: Papas Americanas $ 2500");
                    break

                case '3':
                    alert("Ud. ordenó: Papas con Cheddar $ 3000");
                    break

                case '4':
                    alert("Ud. ordenó: Salchipapas $4000");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas de la Casa  \n 3. Papas Americanas \n 4. salchipapas \n 5: Para SALIR');
        }

    }
}





function eleccionEnvio() {
    let envio = confirm('Desea envio a domicilio');

    if (envio) {
        alert('Recibirás el envío en tu domicilio ');
    }
    else {
        alert('Puedes pasar a retirar por el local');
    }
}

//-----------Desde aca el inicio











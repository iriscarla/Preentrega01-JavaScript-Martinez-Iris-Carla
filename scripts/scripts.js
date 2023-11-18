 // Inicio: da la bienvendida al usuaario y muestra las opciones de menú 
 let menuInicio = prompt('Bienvenido al bar! Puede optar por: \n a: Ver la carta de papas \n b. Catalogo de cervezas  \n c. Ver carta de pizzas \n d. Quiero salir    ');

if (menuInicio !== undefined && menuInicio !== '') {
    if (menuInicio.trim().toLocaleLowerCase() == 'a') {
        mostarCartaPapas()
    }
    else if (menuInicio.trim().toLocaleLowerCase() == 'b') {
        mostarCartaCervezas()
        recorreCervezasporNombre ()
        
    }
    else if (menuInicio.trim().toLocaleLowerCase() == 'c'){
        mostarCartaPizzas()
    }
    else if (menuInicio == 'd') {
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
    if (beer !== null || undefined || false)
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
                    alert(" Cerveza Irish Red $ 1300");
                    break

                case '5':
                    alert(" Cerveza Barley Wine $ 1350");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            beer = prompt('Puede elegir entre \n 1: APA \n 2. IPA  \n 3. Golden \n 4. Irish Red \n 5. Barley Wine \n 5: Para SALIR');

        }

}
//funcion para ver la carta de pizzas:
function mostarCartaPizzas() {
    let eleccionCliente = prompt('Puede elegir entre \n 1: MOZZARELLA \n 2. RUCULA  \n 3. QUESOS \n 4. NAPOLITANA \n 5: Para SALIR');

    if (eleccionCliente !== null || undefined || false) {
        while (eleccionCliente !== '5') {

            switch (eleccionCliente) {
                case '1':
                    alert("MOZZARELLA $4479");
                    break

                case '2':
                    alert("RUCULA con Jamon Crudo $ 5000");
                    break

                case '3':
                    alert("4 QUESOS $ 4800");
                    break

                case '4':
                    alert("NAPOLITANA $4799");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            eleccionCliente = prompt('Puede elegir entre \n 1: MOZZARELLA \n 2. RUCULA  \n 3. QUESOS \n 4. NAPOLITANA \n 5: Para SALIR');
        }

    }
} 


//*******BUSCARDOR****** Funcion para buscar algo (simula un buscador de productos)
function buscador() {
    let busquedaUsuario = prompt('BUSCADOR: Para buscar por nombre ingrese: *1.CERVEZA *2.PAPAS *3.PIZZAS');

    if (busquedaUsuario.trim() == '1') {
        buscarCerveza()
    }
    else if (busquedaUsuario.trim() == '2') {
        buscarPapas()
    }
    else if (busquedaUsuario.trim() == '3') {
        buscarPizzas()
    }
}

// Funcion para buscar una cerveza por nombre

function buscarCerveza() {
    let nombreIngresadoBeer = prompt('¿Qué cerveza busca?')

    if (nombreIngresadoBeer) {
        const filtrado = cerverzas.find((cerveza) => cerveza.nombre.includes(nombreIngresadoBeer.toUpperCase()));
        if (filtrado) {
            console.table(filtrado)
        }
        else {
            console.warn("No se encuentra el producto, intente otro nombre" )
        }
    }
}

// Funcion para buscar una papas por nombre
function buscarPapas() {
    let nombreIngresadoPapa = prompt('¿Qué papas busca?')

    if (nombreIngresadoPapa) {
        const filtrado = papas.find((papa) => papa.nombre.includes(nombreIngresadoPapa.toUpperCase()));
        if (filtrado) {
            console.table(filtrado)
        }
        else {
            console.warn("No se encuentra el producto, intente otro nombre" )
        }

    }
}

// Funcion para buscar una cerveza por nombre

function buscarPizzas() {
    let nombreIngresadoPizza = prompt('¿Qué pizza busca?')

    if (nombreIngresadoPizza) {
        const filtrado = pizzas.find((pizza) => pizza.nombre.includes(nombreIngresadoPizza.toUpperCase()));
        if (filtrado) {
            console.table(filtrado)
        }
        else {
            console.warn("No se encuentra el producto, intente otro nombre" )
        }
    }
}


//prueba
function recorreCervezasporNombre (){
    cerverzas.forEach((cerveza)=> console.table (cerveza.nombre))
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





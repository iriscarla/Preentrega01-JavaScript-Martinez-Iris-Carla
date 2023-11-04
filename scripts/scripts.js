function elegirCartaPapas() {
    let eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas de la Casa  \n 3. Papas Americanas \n 4. salchipapas \n 5: Para SALIR');

    if (eleccionCliente !== null || undefined || false) {
        while (eleccionCliente !== '5') {

            switch (eleccionCliente) {
                case '1':
                    alert("Ud. ordenó: Papas Clásicas $ 2300");
                    break

                case '2':
                    alert("Ud. ordenó: Papas de la Casa $ 3100");
                    break

                case '3':
                    alert("Ud. ordenó: Papas Americanas $ 3000");
                    break

                case '4':
                    alert("Ud. ordenó: Salchipapas $3500");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            eleccionCliente = prompt('Puede elegir entre \n 1: Papas Clásicas \n 2. Papas de la Casa  \n 3. Papas Americanas \n 4. salchipapas \n 5: Para SALIR');
        }

    }
}


function elegirCartaCervezas() {
    let beer = prompt('Puede elegir entre \n 1: Cerveza Rubia \n 2. Cerveza Negra  \n 3. Cerveza Roja \n 5: Para SALIR');
    if (beer !== null || undefined || false)
        while (beer !== '5') {

            switch (beer) {
                case '1':
                    alert("Ud. ordenó: Cerveza Rubia $ 1000");
                    break

                case '2':
                    alert("Ud. ordenó: Cerveza Negra $ 800");
                    break

                case '3':
                    alert("Ud. ordenó: Cerveza Roja $ 1200");
                    break

                default:
                    alert("Elige una opción válida por favor.");
            }
            beer = prompt('Puede elegir entre \n 1: Cerveza Rubia \n 2. Cerveza Negra  \n 3. Cerveza Roja \n 5: Para SALIR');

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

let menuInicio = prompt('Bienvenido al bar! Puede optar por: \n a: Ver la carta de papas \n b. Catalogo de cervezas  \n c. Quiero salir  ');

if (menuInicio !== undefined && menuInicio !== '') {
    if (menuInicio == 'a') {
        elegirCartaPapas()
    }
    else if (menuInicio == 'b') {
        elegirCartaCervezas()
    }
    else if (menuInicio == 'c') {
        alert('Chau')
    }
    else if (menuInicio == undefined) {
        alert('Esperamos verte de nuevo pronto! 🎉')
    }
}









// Función para determinar cuántos y qué tipo de animales pueden entrar en la casa
function calcularCantidadAnimales() {
    // Solicitar cantidad de ambientes
    const cantidadAmbientes = parseInt(prompt("Ingrese la cantidad de ambientes en el domicilio:"));
    
    // Validar que la cantidad de ambientes sea un número válido
    if (isNaN(cantidadAmbientes) || cantidadAmbientes <= 0) {
        console.log("La cantidad de ambientes ingresada no es válida.");
        return;
    }

    // Solicitar metros cuadrados de cada ambiente
    let metrosCuadradosTotales = 0;
    for (let i = 1; i <= cantidadAmbientes; i++) {
        const metrosCuadrados = parseFloat(prompt(`Ingresd los metros cuadrados del ambiente ${i}:`));
        
        // Validar que los metros cuadrados sean válidos
        if (isNaN(metrosCuadrados) || metrosCuadrados <= 0) {
            console.log("Los metros cuadrados ingresados no son válidos.");
            return;
        }
        
        metrosCuadradosTotales += metrosCuadrados;
    }

    // Preguntar si la casa tiene espacios techados y si posee espacio verde
       const tieneEspacioVerde = confirm("¿La casa tiene espacio verde?");

    // Condiciones para albergar animales
    if (cantidadAmbientes >= 3 && metrosCuadradosTotales > 60 && tieneEspacioVerde) {
        console.log("La casa puede albergar un perro grande.");
    } else if (cantidadAmbientes <= 3 && metrosCuadradosTotales <= 60 || !tieneEspacioVerde) {
        console.log("La casa puede albergar un perro pequeño.");
    } else {
        console.log("La casa no cumple las condiciones para albergar un perro.");
    }
}

// Ejecutar el programa
calcularCantidadAnimales();
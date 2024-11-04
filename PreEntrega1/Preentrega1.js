function calcularCantidadAnimales() {
    const cantidadAmbientes = parseInt(prompt("Ingrese la cantidad de ambientes en el domicilio:"));
    
    
    if (isNaN(cantidadAmbientes) || cantidadAmbientes <= 0) {
        console.log("La cantidad de ambientes ingresada no es válida.");
        return;
    }
        let metrosCuadradosTotales = 0;

        for (let i = 1; i <= cantidadAmbientes; i++) {
        const metrosCuadrados = parseFloat(prompt(`Ingrese los metros cuadrados del ambiente ${i}:`));
        
            if (isNaN(metrosCuadrados) || metrosCuadrados <= 0) {
            console.log("Los metros cuadrados ingresados no son válidos.");
            return;
        }
        metrosCuadradosTotales += metrosCuadrados;
    }

        const tieneEspacioVerde = confirm("¿La casa tiene espacio verde?");

    // Condicional para ver si cumple la condicion para albergar
    if (cantidadAmbientes >= 3 && metrosCuadradosTotales > 60 && tieneEspacioVerde) {
        console.log("La casa puede albergar un perro grande.");
    } else if (cantidadAmbientes <= 3 && metrosCuadradosTotales <= 60 || !tieneEspacioVerde) {
        console.log("La casa puede albergar un perro pequeño.");
    } else {
        console.log("La casa no cumple las condiciones para albergar un perro.");
    }
}

calcularCantidadAnimales();
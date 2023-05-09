let opcion = prompt("Hola! Bienvenido a tu simulador de credito vehicular que es lo que deseas hacer hoy? 1. Simular credito 2. Abonar deuda 3. Calcular deuda restante")

opcion = parseInt(opcion);

function mostrarOpciones(opcion)
{
    switch(opcion){
        case 1:
            let montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo: "));
            if(montoPrestamo <= 0){
                alert("Numero invalido por favor intente nuevamente");
                location.reload();
                break;
            }
            let tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%): "));
            if(tasaInteresAnual <= 0){
                alert("Por favor ingrese una tasar de interes valida");
                location.reload();
                break;
            }
            let plazoPrestamoMeses = parseFloat(prompt("Ingrese el plazo del préstamo en meses: "));
            if(plazoPrestamoMeses <= 1){
                alert("Por favor ingrese un plazo de meses valido")
                location.reload();
                break;
            }
            let pagoMensual = 0;
            let totalIntereses = 0;

                for (let i = 1; i <= plazoPrestamoMeses; i++) {
                    let saldoPendiente = montoPrestamo - pagoMensual * (i - 1);
                    let tasaInteresMensual = tasaInteresAnual / 12 / 100;
                    pagoMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoPrestamoMeses));
                    let interesMensual = saldoPendiente * tasaInteresMensual;
                    totalIntereses += interesMensual;
                }
            
            let totalPago = montoPrestamo + totalIntereses;
                if(Number.isNaN(montoPrestamo))
                {
                    console.log("Ups...Parece que hubo un error prueba nuevamente.");
                    console.log("Sugerencias: No poner letras, ni espacios");
                    setTimeout(function(){
                        location.reload();   
                    }, 5000)
                }else{
                    console.log("Monto del préstamo: $" + montoPrestamo);
                    console.log("Tasa de interés anual: " + tasaInteresAnual + "%");
                    console.log("Plazo del préstamo: " + plazoPrestamoMeses + " meses");
                    console.log("Pago mensual: $" + pagoMensual.toFixed(2));
                    console.log("Total de intereses: $" + totalIntereses.toFixed(2));
                    console.log("Total a pagar: $" + totalPago.toFixed(2));
                }

            break;
        case 2:
            alert("¡Función proximamente!");
            break;
        case 3:
            alert("¡Función proximamente!");
            break;
    }
}

mostrarOpciones(opcion)
let opcion = prompt("Hola! Bienvenido a tu simulador de credito vehicular que es lo que deseas hacer hoy? 1. Simular credito 2. Ver listas de carros 3. Calcular deuda restante")

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
            let opcionCase2 = parseInt(prompt("Bienvenido a la lista de vehiculos, que desea hacer: 1. Ver lista de los autos disponibles. 2. Buscar auto especifico. 3.  Filtrar por precio. 4. Simular el credito de un auto de la lista"));

            const auto1 = {
                    marca: "Toyota",
                    modelo: "Corolla",
                    precio: 25000
            };
                
            const auto2 = {
                marca: "Honda",
                modelo: "Civic",
                precio: 27000
            };
                
            const auto3 = {
                marca: "Ford",
                modelo: "Mustang",
                precio: 40000
            };
                
            const auto4 = {
                marca: "Chevrolet",
                modelo: "Corvette",
                precio: 80000
            };

            const auto5 = {
                marca: "Porshe",
                modelo: "GT3 RS",
                precio: 100000
            };

            const auto6 = {
                marca: "Porshe",
                modelo: "Carrera GT",
                precio: 220000
            };

            const auto7 = {
                marca: "Chevrolet",
                modelo: "Onix Rs",
                precio: 100000
            };

            const inventarioAutos = [auto1, auto2, auto3,auto4,auto5,auto6,auto7];

            function buscarAuto(marca, modelo) {
                let AutoEncontrado = inventarioAutos.find(auto => auto.marca === marca && auto.modelo === modelo);
                if(AutoEncontrado){
                    return AutoEncontrado;
                }
            }

            function filtrarPorPrecio(maxPrecio) {
                return inventarioAutos.filter(auto => auto.precio <= maxPrecio);
            }

            function simularCredito(marca, modelo, cuotaInicial, plazo) {
                const auto = buscarAuto(marca, modelo);
            
                if (!auto) {
                    console.log("El auto solicitado no está disponible en el inventario.");
                    return;
                }
            
                const precioTotal = auto.precio;
                const saldoPendiente = precioTotal - cuotaInicial;
                const cuotaMensual = saldoPendiente / plazo;
            
                console.log(`Solicitud de crédito aprobada:
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Precio del auto: $${precioTotal}
                Cuota inicial: $${cuotaInicial}
                Plazo: ${plazo} meses
                Saldo pendiente: $${saldoPendiente}
                Cuota mensual: $${cuotaMensual.toFixed(2)}`);
            }

            switch (opcionCase2) {
                case 1:
                        inventarioAutos.forEach((auto, index) => {
                            console.log(`Auto ${index + 1}:`);
                            console.log("Marca:", auto.marca);
                            console.log("Modelo:", auto.modelo);
                            console.log("Precio:", auto.precio);
                            console.log("--------------------");
                        });
                        break;
                
                    default:
                break;

                case 2:
                        let marca = prompt("Ingrese la marca del vehiculo: ");
                        let modelo = prompt("Ingrese el modelo del vehiculo: ");
                        let busqueda = buscarAuto(marca,modelo);
                        if(busqueda){
                            console.log("-- Busqueda exitosa --");
                            console.log("Marca: " + busqueda.marca);
                            console.log("Modelo: " + busqueda.modelo);
                            console.log("Precio: " + busqueda.precio);
                            console.log("--------------");
                        }else{
                            console.log("El auto solicitado no está disponible en el inventario.");
                        }
                    break;
                
                    case 3:
                        let maxPrecio = prompt("Ingrese el rango de precio del vehiculo: ");
                        let busquedaprecio = filtrarPorPrecio(maxPrecio);
                        console.log("-- Filtro aplicado exitosamente --");
                        busquedaprecio.forEach(auto => {
                            console.log("Marca: " + auto.marca);
                            console.log("Modelo: " + auto.modelo);
                            console.log("Precio: " + auto.precio);
                            console.log("--------------");
                        });
                    break;

                    case 4:
                        let marcaSimulador = prompt("Ingrese la marca que desea simular");                        
                        let modeloSimulador = prompt("Ingrese el modelo que desea simular");                        
                        let coutaInicialSimulador = parseInt(prompt("Ingrese la couta inicial"));                        
                        let plazo = parseInt(prompt("Ingrese el plazo en meses"));

                        simularCredito(marcaSimulador, modeloSimulador, coutaInicialSimulador, plazo);
                    break;
                
            }
            break;
        case 3:
            alert("¡Función proximamente!");
            break;
    }
}

mostrarOpciones(opcion)
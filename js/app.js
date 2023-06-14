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

  const inventarioAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7];

  const btnSimular = document.getElementById("simulator");
  const btnListaVehiculo = document.getElementById("listaV");
  const datosUser = document.getElementById("datosUser");

  btnSimular.addEventListener("click", function(){
    mostrarOpciones(1);
  });

  btnListaVehiculo.addEventListener("click", function(){
    mostrarOpciones(2);
  });

  datosUser.addEventListener("click", function(){
    mostrarOpciones(3);
  });


function mostrarOpciones(opcion) {
  const opcion1 = document.getElementById("case1");
  const opcion2 = document.getElementById("case2");
  const opcion3 = document.getElementById("case3");

  switch (opcion) {
    case 1:
      opcion1.classList.add("d-block");
      opcion1.classList.remove("d-none");
      opcion2.classList.remove("d-block");
      opcion2.classList.add("d-none");
      opcion3.classList.add("d-none");
      opcion3.classList.remove("d-block");
      break;
    case 2:
        opcion2.classList.add("d-block");
        opcion2.classList.remove("d-none");
        opcion1.classList.remove("d-block");
        opcion1.classList.add("d-none");
        opcion3.classList.add("d-none");
        opcion3.classList.remove("d-block");
      break;
    case 3:
        opcion3.classList.add("d-block");
        opcion3.classList.remove("d-none");
        opcion2.classList.add("d-none");
        opcion2.classList.remove("d-block");
        opcion1.classList.remove("d-block");
        opcion1.classList.add("d-none");
      break;
  }
}

const btn_simularCredito = document.getElementById("simularCredito");

btn_simularCredito.addEventListener("click", simuladorCredito);

function simuladorCredito() {
  let montoPrestamo = parseFloat(document.getElementById("montoPrestamo").value);
  if (montoPrestamo <= 0) {
    alert("Número inválido. Por favor, inténtelo nuevamente.");
    return;
  }
  let tasaInteresAnual = parseFloat(document.getElementById("tasaInteresAnual").value);
  if (tasaInteresAnual <= 0) {
    alert("Por favor, ingrese una tasa de interés válida.");
    return;
  }
  let plazoPrestamoMeses = parseFloat(document.getElementById("plazoPrestamoMeses").value);
  if (plazoPrestamoMeses <= 1) {
    alert("Por favor, ingrese un plazo de meses válido.");
    return;
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

  inventarioContainer.innerHTML = "";
        const card = createCard();
        const cardBody = createCardBody();
  
        const titulo = createCardTitle(`Resultados de tu credito`);
        const monto = createCardText("Monto del préstamo:", montoPrestamo);
        const interes = createCardText("Tasa de interés anual: ", tasaInteresAnual + "%");
        const plazoprestamo = createCardText("Plazo del préstamo: ", plazoPrestamoMeses + "meses");
        const pagoMensualCard = createCardText("Pago mensual: $", pagoMensual.toFixed(2));
        const interesCard = createCardText("Total de intereses: $", totalIntereses.toFixed(2));
        const total = createCardText("Total a pagar: $", totalPago.toFixed(2));
  
          cardBody.appendChild(titulo);
          cardBody.appendChild(monto);
          cardBody.appendChild(interes);
          cardBody.appendChild(plazoprestamo);
          cardBody.appendChild(pagoMensualCard);
          cardBody.appendChild(interesCard);
          cardBody.appendChild(total);
  
          card.appendChild(cardBody);
          inventarioContainer.appendChild(card);
}

function buscarAuto(marca, modelo) {
  let AutoEncontrado = inventarioAutos.find(auto => auto.marca === marca && auto.modelo === modelo);
  if (AutoEncontrado) {
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

  inventarioContainer.innerHTML = "";
          const card = createCard();
          const cardBody = createCardBody();
  
          const titulo = createCardTitle(`Credito Aprobado`);
          const marcaCard = createCardText("Marca:", auto.marca);
          const modeloCard = createCardText("Modelo:", auto.modelo);
          const precio = createCardText("Precio:", precioTotal);
          const cuota = createCardText("Cuota:", cuotaInicial);
          const plazoCard = createCardText("Plazo:", plazo, "meses");
          const saldo = createCardText("Saldo pendiente:", saldoPendiente);
          const cuotaMensualCard = createCardText("Cuota Mensual:", cuotaMensual.toFixed(2));
  
          cardBody.appendChild(titulo);
          cardBody.appendChild(marcaCard);
          cardBody.appendChild(modeloCard);
          cardBody.appendChild(precio);
          cardBody.appendChild(cuota);
          cardBody.appendChild(plazoCard);
          cardBody.appendChild(saldo);
          cardBody.appendChild(cuotaMensualCard);
  
          card.appendChild(cardBody);
          inventarioContainer.appendChild(card);
}

const select = document.getElementById("opcionCase2");

select.addEventListener("change", function(){
    const divSimulador = document.getElementById("marcaModelo");
    const maxPrecio = document.getElementById("maxPrecio");
    const simuladorAuto = document.getElementById("simuladorAuto");

    if(select.value == 2)
    {
        divSimulador.classList.remove("d-none");
        divSimulador.classList.add("d-block");

        simuladorAuto.classList.remove("d-block");
        simuladorAuto.classList.add("d-none");

        
        maxPrecio.classList.remove("d-block");
        maxPrecio.classList.add("d-none");

        const btn_simulador = document.getElementById("btn_simulador");

        btn_simulador.addEventListener("click", function(){
            let marca = document.getElementById("marca").value;
            let modelo = document.getElementById("modelo").value;

            if(marca != "" && modelo != "")
            {
                realizarAccion(select.value)
            }
        });
    }else if(select.value == 3){
        maxPrecio.classList.remove("d-none");
        maxPrecio.classList.add("d-block");

        divSimulador.classList.remove("d-block");
        divSimulador.classList.add("d-none");

        simuladorAuto.classList.remove("d-block");
        simuladorAuto.classList.add("d-none");

        const btn_simulador = document.getElementById("btn_maxPrecio");

        btn_simulador.addEventListener("click", function(){
            let maxPrecio = document.getElementById("maxPrecioValue").value;

            if(maxPrecio != "")
            {
                realizarAccion(select.value)
            }
        });
    }else if(select.value == 4){
        simuladorAuto.classList.remove("d-none");
        simuladorAuto.classList.add("d-block");

        maxPrecio.classList.remove("d-block");
        maxPrecio.classList.add("d-none");
        
        divSimulador.classList.remove("d-block");
        divSimulador.classList.add("d-none");

        const btn_simulador = document.getElementById("btn_simularCarro");

        btn_simulador.addEventListener("click", function(){
            let marcaSimulador = document.getElementById("marcaSimulador").value;
            let modeloSimulador = document.getElementById("modeloSimulador").value;
            let cuotaInicialSimulador = parseInt(document.getElementById("cuotaInicialSimulador").value);
            let plazo = parseInt(document.getElementById("plazo").value);

            if(marcaSimulador !=  "" && modeloSimulador !=  "" && cuotaInicialSimulador !=  "" && plazo != "")
            {
                realizarAccion(select.value)
            }
        });
    }else if(select.value == 1){
        realizarAccion(select.value);
    }else{
        alert("Por favor ingresa una opcion valida");
    }
});

function realizarAccion(opcion) {
  const opcionCase2 = parseInt(opcion);
  const inventarioContainer = document.getElementById("inventarioContainer");

  switch (opcionCase2) {
    case 1:
        inventarioContainer.innerHTML = "";
  
        inventarioAutos.forEach((auto, index) => {
          const card = createCard();
          const cardBody = createCardBody();
  
          const titulo = createCardTitle(`Auto ${index + 1}`);
          const marca = createCardText("Marca:", auto.marca);
          const modelo = createCardText("Modelo:", auto.modelo);
          const precio = createCardText("Precio:", auto.precio);
  
          cardBody.appendChild(titulo);
          cardBody.appendChild(marca);
          cardBody.appendChild(modelo);
          cardBody.appendChild(precio);
  
          card.appendChild(cardBody);
          inventarioContainer.appendChild(card);
        });
        break;

    case 2:
      let marca = document.getElementById("marca").value;
      let modelo = document.getElementById("modelo").value;

      let busqueda = buscarAuto(marca, modelo);
      if (busqueda) {
        inventarioContainer.innerHTML = "";
          const card = createCard();
          const cardBody = createCardBody();
  
          const titulo = createCardTitle(`Busqueda exitosa!`);
          const marca = createCardText("Marca:", busqueda.marca);
          const modelo = createCardText("Modelo:", busqueda.modelo);
          const precio = createCardText("Precio:", busqueda.precio);
  
          cardBody.appendChild(titulo);
          cardBody.appendChild(marca);
          cardBody.appendChild(modelo);
          cardBody.appendChild(precio);
  
          card.appendChild(cardBody);
          inventarioContainer.appendChild(card);
      } else {
        console.log("El auto solicitado no está disponible en el inventario.");
      }
      break;

    case 3:
      let maxPrecio = parseFloat(document.getElementById("maxPrecioValue").value);
      let busquedaprecio = filtrarPorPrecio(maxPrecio);

      
      inventarioContainer.innerHTML = "";

      busquedaprecio.forEach((auto, index) => {
        const card = createCard();
        const cardBody = createCardBody();

        const titulo = createCardTitle(`Auto ${index + 1}`);
        const marca = createCardText("Marca:", auto.marca);
        const modelo = createCardText("Modelo:", auto.modelo);
        const precio = createCardText("Precio:", auto.precio);

        cardBody.appendChild(titulo);
        cardBody.appendChild(marca);
        cardBody.appendChild(modelo);
        cardBody.appendChild(precio);

        card.appendChild(cardBody);
        inventarioContainer.appendChild(card);
      });
      break;

    case 4:
      let marcaSimulador = document.getElementById("marcaSimulador").value;
      let modeloSimulador = document.getElementById("modeloSimulador").value;
      let cuotaInicialSimulador = parseInt(document.getElementById("cuotaInicialSimulador").value);
      let plazo = parseInt(document.getElementById("plazo").value);

      simularCredito(marcaSimulador, modeloSimulador, cuotaInicialSimulador, plazo);
      break;
  }
}

function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
  }
  
  function createCardBody() {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    return cardBody;
  }
  
  function createCardTitle(text) {
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = text;
    return title;
  }
  
  function createCardText(label, text) {
    const textElement = document.createElement("p");
    textElement.classList.add("card-text");
    textElement.innerHTML = `${label} ${text}`;
    return textElement;
  }


  function encriptar(contrasena){
    return "*".repeat(contrasena.length);
  }

function mostrarDatosUsuario(nombreUsuario) {
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  let usuario = data.find(function(usuario) {
    return usuario.usuario === nombreUsuario;
  });

  if (usuario) {
    // Mostrar los datos del usuario en la interfaz
    const card = createCard();
    const cardBody = createCardBody();

    const titulo = createCardTitle("Datos del usuario:");
    const nombre = createCardText("Nombre:", usuario.nombre);
    const correo = createCardText("Correo:", usuario.correo);
    const telefono = createCardText("Teléfono:", usuario.telefono);
    const usuarioCard = createCardText("Usuario:", usuario.usuario);
    const contrasena = createCardText("Contraseña:", encriptar(usuario.contrasena));

    cardBody.appendChild(titulo);
    cardBody.appendChild(nombre);
    cardBody.appendChild(correo);
    cardBody.appendChild(telefono);
    cardBody.appendChild(usuarioCard);
    cardBody.appendChild(contrasena);

    card.appendChild(cardBody);
    inventarioContainer.appendChild(card);
  } else {
    console.log("Usuario no encontrado.");
  }
}

let btnVerDatos = document.getElementById("btn_datos");
btnVerDatos.addEventListener("click", function() {
  let nombreUsuario = document.getElementById("nombre").value;
  mostrarDatosUsuario(nombreUsuario);
});

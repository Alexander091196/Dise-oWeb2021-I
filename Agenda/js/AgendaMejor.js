function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;

    /* Const = los datos no pueden remplazarce - pero tambien es amplia */
    const datos = {
        'apellido': apellido,
        'dni': dni,
        'movil': movil,
        'email': email,
        'direccion': direccion,
    }
    /* Lo convertimos a string los datos */
    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    actualizarDatos();
}

function recuperarDato() {
    var nombre = document.getElementById("nombre").value;
    /* En contramos el nombre y almacenamos los datos personales en "datos" */
    let datos = localStorage.getItem(nombre);
    /* Separando los valores que capturamos en esta variable */
    datos = JSON.parse(datos);

    document.getElementById("apellido").value = datos.apellido;
    document.getElementById("dni").value = datos.dni;
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
    document.getElementById("direccion").value = datos.direccion;

}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacio</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);

            registro += `<li> <span class="nom"> ${key} </span>
                              <span class="nom"> ${datos.apellido}  </span>
                              <span class="nom"> ${datos.dni}  </span>
                              <span class="nom"> ${datos.movil}  </span> 
                              <span class="nomEmail"> ${datos.email}  </span>
                              <span class="nomDirec"> ${datos.direccion}  </span>

                        </li><br>`;
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}

/* Valindado datos para solo letras */
function sololetrasN(evt) {
    var charCode = (evt.charCode);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        document.getElementById("aviso").innerHTML = "";
        return true;
    } else {
        // alert("ingrese solo letras");
        // mensaje de aletar abajo del dato
        document.getElementById("aviso").innerHTML = 'Ingrese solo letras';
        return false;
    }
}
function sololetrasA(evt) {
    var charCode = (evt.charCode);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        document.getElementById("aviso2").innerHTML = "";
        return true;
    } else {
        // alert("ingrese solo letras");
        // mensaje de aletar abajo del dato
        document.getElementById("aviso2").innerHTML = 'Ingrese solo letras';
        return false;
    }
}


function actual() {
    fecha = new Date(); //Actualizar fecha.
    hora = fecha.getHours(); //hora actual
    minuto = fecha.getMinutes(); //minuto actual
    segundo = fecha.getSeconds(); //segundo actual
    if (hora < 10) { //dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10) { //dos cifras para el minuto
        minuto = "0" + minuto;
    }
    if (segundo < 10) { //dos cifras para el segundo
        segundo = "0" + segundo;
    }
    //devolver los datos:
    mireloj = hora + " : " + minuto + " : " + segundo;
    return mireloj;
}
function actualizar() { //función del temporizador
    mihora=actual(); //recoger hora actual
    mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
      }
 setInterval(actualizar,1000); //iniciar temporizador
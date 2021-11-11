function guardarDato(){
    var nombre=document.getElementById("nombre").value;
    var movil=document.getElementById("movil").value;
    var email=document.getElementById("email").value;

    /* Const = los datos no pueden remplazarce - pero tambien es amplia */
    const datos = {
        'movil': movil,
        'email': email,
    }
     /* Lo convertimos a string los datos */
    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    /* En contramos el nombre y almacenamos los datos personales en "datos" */
    let datos = localStorage.getItem(nombre);
    /* Separando los valores que capturamos en esta variable */
    datos = JSON.parse(datos);

    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro="";
    if(localStorage.length === 0){
        registro +='<li>Vacio</li>';
    } else{ 
        for(var i=0; i <= localStorage.length -1; i++){
            var key=localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);

            registro += `<li> <span class="nom"> ${key} </span>
                              <span class="nom"> ${datos.movil}  </span> 
                              <span class="nomemail"> ${datos.email}  </span>
                        </li><br>`;  
                    }
    }
    document.getElementById('contactos').innerHTML=registro;
}

/* Valindado datos para solo letras */
function sololetras(evt){
    var charCode = (evt.charCode);
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
        document.getElementById("aviso").innerHTML = "";
        return true;
    } else{
        // alert("ingrese solo letras");
        // mensaje de aletar abajo del dato
        document.getElementById("aviso").innerHTML = 'Ingrese solo letras';
        return false;
    }
}



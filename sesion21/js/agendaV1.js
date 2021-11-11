function guardardatos(){
localStorage.nombre = document.getElementById("nombre").value;
localStorage.movil = document.getElementById("movil").value;
}

function recuperardatos(){
    if((localStorage.nombre!=undefined) && (localStorage.movil!=undefined)){
        /* innerHTML = escribir directo del parrafo */
    document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Num. Celular: " + localStorage.movil;       
    }
    else{
    document.getElementById("datos").innerHTML = "No haz ingresado tus datos en la agenda";
    }
}
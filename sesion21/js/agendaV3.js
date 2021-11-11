function guardarDato(){
    var nombre=document.getElementById("nombre").value;
    var movil=document.getElementById("movil").value;
    var email=document.getElementById("email").value;
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("movil",movil);
    localStorage.setItem("email",email);
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}
function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value=localStorage.getItem(nombre);
    document.getElementById("email").value=localStorage.getItem(nombre);
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
    if(localStorage.length==0){
        registro +='<li>Vacio</li>';
    } 
    else{ 
        console.log(localStorage);      
        for(var i=0; i<=localStorage.length -1; i++){
            var key=localStorage.key(i);
            switch(i){
                case 0:
                    registro+= '<span class="nom">' + localStorage.getItem('nombre') + '</span>';
                    break;
                case 1:
                    registro+= '<span class="nom">' + localStorage.getItem('movil') + '</span>';
                    break;
                case 2:
                    registro+= '<span class="nom">' + localStorage.getItem('email') + '</span>'; 
                    break;                                     
            }
           
        }   
    }
    document.getElementById('contactos').innerHTML=registro;
}
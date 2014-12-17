//JavaScript ------------------------------
//para un menú desplegble
function ver(n) {
 
  document.getElementById("subseccion"+n).style.display="block";

} //Cierre la función de ver


//para un menú desplegble
function ocultar(n) {

  document.getElementById("subseccion"+n).style.display="none";

} //Cierre la función de ocultar

    
//Para que aparezca el botón y desaparezca el texto
function mostrarDesaparecer(){
      
    //Se obtiene el botón y la explicación
    var expli=document.getElementById("expli");
    var boton=document.getElementById("boton");
    
    //Se pregunta en el estado en el que está la explicación
    if(expli.style.display=="block"){ //Si se está mostrando
    
        //El método display en none desaparece la información
        expli.style.display="none";        
        
    }
    else{ //Si no se está mostrando
    
        //El método display en block muestra la información
        expli.style.display="block";
    }
      
} //Cierre la función de mostrarDesaparecer

function cambiarColor(n) {
 
  document.getElementById("botonRuta"+n).style.color="#F7B4D7";

} //Cierre la función de ver


//para un menú desplegble
function colorOriginal(n) {

  document.getElementById("botonRuta"+n).style.color="#DF0174";

} //Cierre la función de ocultar


function mostrar(n){
      
    //Se obtiene el botón y la explicación
    var botonRuta=document.getElementById("botonRuta"+n);
    var parrafo=document.getElementById("parrafo"+n);
    
    //El método display en block muestra la información
    parrafo.style.display="block";

      
} //Cierre la función de mostrarOcultar

function ocultar(n){
      
    //Se obtiene el botón y la explicación
    var botonRuta=document.getElementById("botonRuta"+n);
    var parrafo=document.getElementById("parrafo"+n);
    
    //El método display en block muestra la información
    parrafo.style.display="none";

      
} //Cierre la función de mostrarOcultar


function entrarFoco(elemento){
    
    //Cambiar el nombre de la clase del elemento HTML
    elemento.className="enfoco";
    
}

function salirFoco(elemento){
    
    //Quitar el nombre de la clase del elemento HTML
    elemento.className="";
    
    
}

function cambiarMapa(id){

    document.getElementById("mapa").src = id;

}
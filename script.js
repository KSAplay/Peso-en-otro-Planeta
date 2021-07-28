// -------------------------------------------------------------------------
//                               VARIABLES
// -------------------------------------------------------------------------
// Variables auxiliares
var peso_final = 0;
var peso_usuario = 0;
var planetaSeleccionado = "Saturno";

// Gravedades de los planetas
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.807;
var g_marte = 3.721;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;

// -------------------------------------------------------------------------
//                               FUNCIONES
// -------------------------------------------------------------------------
function cambiarImagen(){
    planetaSeleccionado = $("select.planetas option:selected").text();
    $("img#imagen").replaceWith('<img id="imagen" src="img/'+planetaSeleccionado+'.png" alt="'+planetaSeleccionado+'" height="38.5%" width="50%">');
    calcularPeso();
}

function calcularPeso(){
    // Obteniendo el peso
    peso_usuario = $("input#pesoUsuario").val();
    if(peso_usuario == ""){
        peso_usuario = 0.0;
    }
    // Calculando su valor según el planeta seleccionado
    switch(planetaSeleccionado){
        case "Marte":
            peso_final = peso_usuario * g_marte / g_tierra;
            break;
        case "Mercurio":
            peso_final = peso_usuario * g_mercurio / g_tierra;
            break;
        case "Venus":
            peso_final = peso_usuario * g_venus / g_tierra;
            break;
        case "Júpiter":
            peso_final = peso_usuario * g_jupiter / g_tierra;
            break;
        case "Saturno":
            peso_final = peso_usuario * g_saturno / g_tierra;
            break;
        case "Urano":
            peso_final = peso_usuario * g_urano / g_tierra;
            break;
        case "Neptuno":
            peso_final = peso_usuario * g_neptuno / g_tierra;
            break;
    }
    // Mostrando valores
    //console.log(peso_usuario);
}
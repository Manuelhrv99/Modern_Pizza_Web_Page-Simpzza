window.addEventListener("scroll", function(){
    var Header = document.querySelector("Header");
    Header.classList.toggle("sticky", window.scrollY > 0);
})
function ancla(){
    var Header = document.getElementById('Header');
    Header.classList.toggle('active')
}

var borrar = () =>{
    var in_Nombre = document.getElementById("in_Nombre")
    var in_Ubicacion = document.getElementById("in_Ubicacion")
    var cb_Medios = document.getElementById("cb_Medios")
    var indice = 0
    //var aux_cb = document.Contenedor.cb_Medios.options[indice].value*/
    cb_Medios.selectedIndex = 0
    in_Nombre.value = ""
    in_Ubicacion.value = ""
    //cb_Medios.value = aux_cb
}

var enviar = () =>{
    var in_Nombre = document.getElementById("in_Nombre")
    var in_Ubicacion = document.getElementById("in_Ubicacion")
    if (in_Nombre.value == "" || in_Ubicacion.value == "")
        alert("Falta llenar algun campo")
    else
    alert("¡Gracias por registrarte! Muy pronto te enviaremos ofertas")
}

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Carrito

var OverC = () => {
    var txt_Pagar = document.getElementById("txt_Pagar")
    txt_Pagar.style.display = "block"
}
var No_OverC = () => {
    var txt_Pagar = document.getElementById("txt_Pagar")
    txt_Pagar.style.display = "none"
}
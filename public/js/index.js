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
    var in_WA = document.getElementById("in_WA")
    var cb_Tamaño = document.getElementById("cb_Tamaño")
    var indice = 0
    //var aux_cb = document.Contenedor.cb_Tamaño.options[indice].value

    in_Nombre.value = ""
    in_WA.value = ""
    //cb_Tamaño.value = aux_cb
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
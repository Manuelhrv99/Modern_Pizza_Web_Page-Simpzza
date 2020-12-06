var Volver = () => {
    location.href = "javascript:window.history.back()"
}

var Comprar = () => {
    location.href = "carrito.html"
}

/*var cambiar_Color = (x) =>
{
    if(x.style.background=="tranparent")
    {
        x.style.background=="#03c4a1";
    }else{
        x.style.background="tranparent";
    }
}*/

jQuery("#Circulos1 .Preferencias").click(function(){ 
    jQuery("#Circulos1 .Preferencias").removeClass('active'); 
    jQuery(this).toggleClass('active'); 
});

jQuery("#Circulos2 .Preferencias").click(function(){ 
    jQuery("#Circulos2 .Preferencias").removeClass('active'); 
    jQuery(this).toggleClass('active'); 
});
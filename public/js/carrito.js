//Elimina el articulo del carrito

$('a.C_Eliminar').click(function(){
    event.preventDefault();
    $( this ).parent().parent().parent().hide( 400 );
})

//Hola GitHub
//Hola mama
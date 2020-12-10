const urlBase = "http://localhost:62594/api/v1"

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

var str1=     '<li class="C_Articulo">'
var str2 =     '<div class="C_Info">' 
var str3 =         '<div class="C_Seccion">'
var str4 =         '<img src="./img/Waifu.jpg" alt="" class="C_Imagen"/>'
var str5 =         '<h3 id = "nomreDeProducto">'

var str6 =         '</h3>'
var str7 =         '<p id="precioIndividual"><input id="numeroDePedidos" type="text"  class="C_Cantidad" placeholder=""/>'

var str8 =         '</p>'
var str8 =         '</div>'  
var str9 =         '<div class="C_SubTotal C_Seccion">'
var str10 =        '<p id="precioPorOrden">'

var str11 =        '</p>'
var str12 =        '</div>'
var str13 =        '<div class="C_Seccion">'
var str14 =        '<a href="#" class="C_Eliminar">x</a>'
var str15 =        '</div>'
var str16 =    '</div>'
var str17 =    '</li>'

var pedidoGetCombo1 = () => {

    var url = urlBase + "/getComboById/" + 1

    numeroDePedidos = Number(document.getElementById("numeroDePedidos"))
    precioPorOrden = Number(document.getElementById("precioPorOrden"))

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

        $("#carritoIterable").empty();

        var strImpresionDePedido ="";
        strImpresionDePedido += str1;
        strImpresionDePedido += str2;
        strImpresionDePedido += str3;
        strImpresionDePedido += str4;
        strImpresionDePedido += str5;
        strImpresionDePedido += data[0].nombre;
        strImpresionDePedido += str6;
        strImpresionDePedido += str7;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str8;
        strImpresionDePedido += str9;
        strImpresionDePedido += str10;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str11;
        strImpresionDePedido += str12;
        strImpresionDePedido += str13;
        strImpresionDePedido += str14;
        strImpresionDePedido += str15;
        strImpresionDePedido += str16;
        strImpresionDePedido += str17;

        console.log(precioPorOrden.value);
        console.log(data[0].id);

        $("#carritoIterable").append(strImpresionDePedido);

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoGetCombo2 = () => {

    var url = urlBase + "/getComboById/" + 2

    numeroDePedidos = Number(document.getElementById("numeroDePedidos"))
    precioPorOrden = Number(document.getElementById("precioPorOrden"))

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

        $("#carritoIterable").empty();

        var strImpresionDePedido ="";
        strImpresionDePedido += str1;
        strImpresionDePedido += str2;
        strImpresionDePedido += str3;
        strImpresionDePedido += str4;
        strImpresionDePedido += str5;
        strImpresionDePedido += data[0].nombre;
        strImpresionDePedido += str6;
        strImpresionDePedido += str7;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str8;
        strImpresionDePedido += str9;
        strImpresionDePedido += str10;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str11;
        strImpresionDePedido += str12;
        strImpresionDePedido += str13;
        strImpresionDePedido += str14;
        strImpresionDePedido += str15;
        strImpresionDePedido += str16;
        strImpresionDePedido += str17;

        console.log(precioPorOrden.value);
        console.log(data.id);

        $("#carritoIterable").append(strImpresionDePedido);

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoGetCombo3 = () => {

    var url = urlBase + "/getComboById/" + 3

    numeroDePedidos = Number(document.getElementById("numeroDePedidos"))
    precioPorOrden = Number(document.getElementById("precioPorOrden"))

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

        $("#carritoIterable").empty();

        var strImpresionDePedido ="";
        strImpresionDePedido += str1;
        strImpresionDePedido += str2;
        strImpresionDePedido += str3;
        strImpresionDePedido += str4;
        strImpresionDePedido += str5;
        strImpresionDePedido += data[0].nombre;
        strImpresionDePedido += str6;
        strImpresionDePedido += str7;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str8;
        strImpresionDePedido += str9;
        strImpresionDePedido += str10;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str11;
        strImpresionDePedido += str12;
        strImpresionDePedido += str13;
        strImpresionDePedido += str14;
        strImpresionDePedido += str15;
        strImpresionDePedido += str16;
        strImpresionDePedido += str17;

        console.log(precioPorOrden.value);
        console.log(data[0].id);

        $("#carritoIterable").append(strImpresionDePedido);

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoGetCombo4 = () => {

    var url = urlBase + "/getComboById/" + 4

    numeroDePedidos = Number(document.getElementById("numeroDePedidos"))
    precioPorOrden = Number(document.getElementById("precioPorOrden"))

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

        $("#carritoIterable").empty();

        var strImpresionDePedido ="";
        strImpresionDePedido += str1;
        strImpresionDePedido += str2;
        strImpresionDePedido += str3;
        strImpresionDePedido += str4;
        strImpresionDePedido += str5;
        strImpresionDePedido += data[0].nombre;
        strImpresionDePedido += str6;
        strImpresionDePedido += str7;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str8;
        strImpresionDePedido += str9;
        strImpresionDePedido += str10;
        strImpresionDePedido += data[0].precio;
        strImpresionDePedido += str11;
        strImpresionDePedido += str12;
        strImpresionDePedido += str13;
        strImpresionDePedido += str14;
        strImpresionDePedido += str15;
        strImpresionDePedido += str16;
        strImpresionDePedido += str17;

        console.log(precioPorOrden.value);
        console.log(data[0].id);

        $("#carritoIterable").append(strImpresionDePedido);

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

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
    var cb_Medios = document.getElementById("cb_Medios")
    var indice = 0
    //var aux_cb = document.Contenedor.cb_Medios.options[indice].value*/
    cb_Medios.selectedIndex = 0
    in_Nombre.value = ""
    in_WA.value = ""
    //cb_Medios.value = aux_cb
}

var enviar = () =>{
    var in_Nombre = document.getElementById("in_Nombre")
    var in_WA = document.getElementById("in_WA")
    if (in_Nombre.value == "" || in_WA.value == "")
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

var cargaCombos = () => {
          
    var url = urlBase + "/getAllCombos"

    fetch (url, {
        method: "GET"
    }).then ((response) => {
        return response.json();
    }).then ((data) => {
        console.log (data); 
        console.log (data.length);
        data.forEach(credencial => {
            var txt_ComboNombre = document.getElementById("comboNombre_" + credencial.id)
            var txt_ComboPrecio = document.getElementById("precioCombo_" + credencial.id)
            var txt_ComboDescripcion = document.getElementById("descCombo_" + credencial.id)

            //console.log(credencial.id)
            //console.log(credencial.nombre)
            txt_ComboNombre.innerHTML = credencial.nombre
            txt_ComboDescripcion.innerHTML = credencial.descripcion
            txt_ComboPrecio.innerHTML = credencial.precio
            //console.log(txt_ComboNombre.value)
            //console.log(txt_ComboPrecio.value)
            //console.log(txt_ComboDescripcion.value)
            //console.log(credencial)

            /*var datosCombos={
                nombre: credencial.nombre,
                precio: credencial.precio
            } 
            localStorage.setItem("datosCombos",JSON.stringify(datosCombos))
            console.log(datosCombos)*/
        });

    }).catch ((err) => {    
        console.log("ocurrio un error", err);
    })
}


var pedidoGetCombo2 = () => {

    var url = urlBase + "/getComboById/" + 2

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoGetCombo3 = () => {

    var url = urlBase + "/getComboById/" + 3

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoGetCombo4 = () => {

    var url = urlBase + "/getComboById/" + 4

    fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data[0])

      }).catch((err) => {
        console.log("Ha ocurrido un error", err)
      })
}

var pedidoPizzas = () => {

    

}

var enviarSms = () =>{

    console.log("hola")

    var in_Celular = document.getElementById("in_Celular");
    var message = "Gracias por comprar tus pizza, en enviaremos otro mensaje cuando este lista"
    var sms = {
        toNumber: in_Celular.value,
        text: message
    }

    fetch("http://localhost:3000/api/sms",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sms)
    }).then((result) => {
        return result.json()
    }).then((data) => {
        alert(data)
    }).catch((err) =>{
        console.log(err)
    })
}

window.onload = () => {
    cargaCombos()
}
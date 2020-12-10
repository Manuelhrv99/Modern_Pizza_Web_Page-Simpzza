const urlBase = "http://localhost:62594/api/v1"

var usuarioLabel = document.getElementById("Usuario")

var Over = () => {
    var Usuario = document.getElementById("Usuario")
    var img_Logout = document.getElementById("img_Logout")
    img_Logout.src = "./Iconos/Logout2.png"
    Usuario.innerHTML = "Salir"
    //Usuario.style.transition = "0.5s"
    Usuario.style.color = "#cd0a0a"
}

var No_Over = () => {
    var Usuario = document.getElementById("Usuario")
    var img_Logout = document.getElementById("img_Logout")
    img_Logout.src = "./Iconos/Logout3.png"
    Usuario.innerHTML = "Manuel"
    Usuario.style.color = "#FFF"
}

var str1 =     '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">'
var str2 =     '<div class="Tarjetas">'
var str3 =         '<div class="form-row">'
var str4 =             '<div class="form-group col-sm-12 col-md-12 col-xl-12">'
var str5 =                 '<label for="">Id</label>'
var str6 =                 '<input type="text" class="form-control" id="txt_Id'

var str7 =                 '" placeholder="1" disabled>'
var str8 =             '</div>'
var str9 =             '<div class="form-group col-sm-12 col-md-12 col-xl-12">'
var str10 =                '<label for="">Nombre</label>'
var str11 =                '<input type="text" class="form-control" id="txt_E_Nombre'

var str12 =                '">'
var str13 =            '</div>'
var str14 =            '<div class="form-group col-sm-12 col-md-12 col-xl-12">'
var str15 =                '<label for="">Contraseña</label>'
var str16 =                '<input type="text" class="form-control" id="txt_E_Contraseña'

var str17 =                '">'
var str18 =            '</div>'
var str19 =            '<div class="form-group col-sm-12 col-md-12 col-xl-12">'
var str20 =                '<div class="Mod">'
var str21 =                    '<button id="btn_Modificar'

var str22 =            '" onclick="modificar('

var str23 =                        ')">'
var str24 =                        'Modificar'
var str25 =                    '</button>'
var str26 =                '</div>'
var str27 =            '</div>'
var str28 =            '<div class="form-group col-sm-12 col-md-12 col-xl-12">'
var str29 =                '<div class="Eli">'
var str30 =                    '<button id="btn_Eliminar" onclick="eliminar('

var str31 =                        ')">'
var str32 =                        'Eliminar'
var str33 =                    '</button>'
var str34 =                '</div>'
var str35 =            '</div>'
var str36 =        '</div>'
var str37 =    '</div>'
var str38 =    '</div>'

var Login = () => {
    localStorage.removeItem("datosSesion")
    window.location.href = "http://localhost:3000/index.html"
}

var Over = () => {
    var Usuario = document.getElementById("Usuario")
    var img_Logout = document.getElementById("img_Logout")
    img_Logout.src = "./Iconos/Logout2.png"
    Usuario.innerHTML = "Salir"
    //Usuario.style.transition = "0.5s"
    Usuario.style.color = "#cd0a0a"
}

var No_Over = () => {
    var Usuario = document.getElementById("Usuario")
    var img_Logout = document.getElementById("img_Logout")
    img_Logout.src = "./Iconos/Logout3.png"
    Usuario.innerHTML = "Manuel"
    Usuario.style.color = "#FFF"
}

var allowUser = () => {
    var datosSesion = localStorage.getItem("datosSesion")
    if (datosSesion != null)
    {
        datosSesion = JSON.parse(datosSesion)
        if (datosSesion.nombre != "Manuel")
            window.location.href = "http://localhost:3000/login.html"
        else{
            usuarioLabel = datosSesion.nombre
        }
    }else{
        window.location.href = "http://localhost:3000/login.html"
    }
}

var cargaTodosLosCombos = () => {

    var url = urlBase + "/getAllCombos"

    fetch (url, {
        method: "GET"
    }).then ((response) => {
        return response.json();
    }).then ((data) => {
        console.log (data); 
        console.log (data.length);
        data.forEach(credencial => {

            var txt_P_Nombre = document.getElementById("txt_Nombre_" + credencial.id)
            var txt_Precio = document.getElementById("txt_Precio_" + credencial.id)
            var txt_Descripcion = document.getElementById("txt_Desc_" + credencial.id)

            txt_P_Nombre.value = credencial.nombre
            txt_Precio.value = credencial.precio
            txt_Descripcion.value = credencial.descripcion

            //console.log(credencial)
        });

    }).catch ((err) => {
        console.log("ocurrio un error", err);
    })
}

var modificarCombo1 = () => {

    url = urlBase + "/updateCombo"
    
    var datos = {
        Id: Number(1),
        Nombre: document.getElementById("txt_Nombre_1").value,
        Precio: Number(document.getElementById("txt_Precio_1").value),
        Descripcion: document.getElementById("txt_Desc_1").value
    }

    //console.log(datos.Id)
    //console.log(datos)
    //console.log(datos.Precio)

    fetch(url,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        window.onload()

    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })
}


var modificarCombo2 = () => {

    url = urlBase + "/updateCombo"

    var datos = {
        Id: Number(2),
        Nombre: document.getElementById("txt_Nombre_2").value,
        Precio: Number(document.getElementById("txt_Precio_2").value),
        Descripcion: document.getElementById("txt_Desc_2").value
    }

    //console.log(datos.Id)
    //console.log(datos)
    //console.log(datos.Precio)

    fetch(url,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        window.onload()

    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })
}


var modificarCombo3 = () => {

    url = urlBase + "/updateCombo"

    var datos = {
        Id: Number(3),
        Nombre: document.getElementById("txt_Nombre_3").value,
        Precio: Number(document.getElementById("txt_Precio_3").value),
        Descripcion: document.getElementById("txt_Desc_3").value
    }

    //console.log(datos.Id)
    //console.log(datos)
    //console.log(datos.Precio)

    fetch(url,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        window.onload()

    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })
}

var modificarCombo4 = () => {

    url = urlBase + "/updateCombo"

    var datos = {
        Id: Number(4),
        Nombre: document.getElementById("txt_Nombre_4").value,
        Precio: Number(document.getElementById("txt_Precio_4").value),
        Descripcion: document.getElementById("txt_Desc_4").value
    }

    //console.log(datos.Id)
    //console.log(datos)
    //console.log(datos.Precio)

    fetch(url,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        window.onload()

    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })
}
var adminAgregarUsuario = () => {

    var url = urlBase + "/addEmpleado"
    
    var txt_ag_Nombre = document.getElementById("txt_ag_Nombre")
    var txt_ag_Contraseña = document.getElementById("txt_ag_Contraseña")

    var datos = {
        Nombre :  txt_ag_Nombre.value,
        Contraseña : txt_ag_Contraseña.value
    }

    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        adminUsuarioCargaCredencial()

    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })

}

var adminUsuarioCargaCredencial = () => {

    var url = urlBase + "/getAllEmpleados"
    var i = 1
    var a = 1

    fetch (url, {
        method: "GET"
    }).then ((response) => {
        return response.json();
    }).then ((data) => {
        console.log (data); 
        console.log (data.length);
        $("#credencialesEmpleados").empty();
        data.forEach(credencial => {
                i = credencial.id;

                var strCredencialEmpleado = "";
                strCredencialEmpleado += str1;
                strCredencialEmpleado += str2;
                strCredencialEmpleado += str3;
                strCredencialEmpleado += str4;
                strCredencialEmpleado += str5;
                strCredencialEmpleado += str6;
                strCredencialEmpleado += credencial.id;
                strCredencialEmpleado += str7;
                strCredencialEmpleado += str8;
                strCredencialEmpleado += str9;
                strCredencialEmpleado += str10;
                strCredencialEmpleado += str11;
                strCredencialEmpleado += credencial.id;
                strCredencialEmpleado += str12;
                strCredencialEmpleado += str13;
                strCredencialEmpleado += str14;
                strCredencialEmpleado += str15;
                strCredencialEmpleado += str16;
                strCredencialEmpleado += credencial.id;
                strCredencialEmpleado += str17;
                strCredencialEmpleado += str18;
                strCredencialEmpleado += str19;
                strCredencialEmpleado += str20;
                strCredencialEmpleado += str21;
                //strCredencialEmpleado += credencial.id
                strCredencialEmpleado += str22; 
                strCredencialEmpleado += credencial.id
                strCredencialEmpleado += str23;
                strCredencialEmpleado += str24;
                strCredencialEmpleado += str25;
                strCredencialEmpleado += str26;
                strCredencialEmpleado += str27;
                strCredencialEmpleado += str28;
                strCredencialEmpleado += str29;
                strCredencialEmpleado += str30;
                strCredencialEmpleado += credencial.id;
                strCredencialEmpleado += str31;
                strCredencialEmpleado += str32;
                strCredencialEmpleado += str33;
                strCredencialEmpleado += str34;
                strCredencialEmpleado += str35;
                strCredencialEmpleado += str36;
                strCredencialEmpleado += str37;
                strCredencialEmpleado += str38;
    
                $("#credencialesEmpleados").append(strCredencialEmpleado);
                //console.log(credencial)
            
        });
        //console.log(i)
        a = 1;
        while (a <= i +1)  {
            //console.log(a + "pasada")
            var txt_Id = document.getElementById("txt_Id" + data[a -1].id);
            var txt_E_Nombre = document.getElementById("txt_E_Nombre" + data[a -1].id);
            var txt_E_Contraseña = document.getElementById("txt_E_Contraseña" + data[a -1].id);
            //console.log(txt_Id)
            //console.log(txt_E_Nombre)
            //console.log(txt_E_Contraseña)
            txt_Id.value = data[a -1].id 
            txt_E_Nombre.value = data[a-1].nombre
            txt_E_Contraseña.value = data[a-1].contraseña
            //console.log(txt_Id.value)
            //console.log(txt_E_Nombre.value)
            //console.log(txt_E_Contraseña.value)
            //console.log(a)
            a++
        }

    }).catch ((err) => {
        console.log("ocurrio un error", err);
    })
}

modificar = (id) => {

    idUsuario = id
    url = urlBase + "/updateEmpleado"
    console.log(idUsuario)

    var datos = {
        Id: Number(idUsuario),
        Nombre: document.getElementById("txt_E_Nombre" + idUsuario).value,
        Contraseña: document.getElementById("txt_E_Contraseña" + idUsuario).value,
        login: false
    }

    //console.log(datos.id)
    //console.log(datos)

    fetch(url,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(datos)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        adminUsuarioCargaCredencial()


    }).catch((err) => {
        console.log("Ha ocurrido un error", err)
    })

}

eliminar = (id) => {

    idUsuario = id
    console.log(id)
    url = urlBase + "/deleteEmpleado/" + idUsuario
    console.log(url)
    fetch(url, {
        method: "DELETE",
        }).then((response) => {
        return response.json()
        }).then((data) => {
        console.log(data)
        adminUsuarioCargaCredencial()
        alert("se elimino el usuario correctamente")
        }).catch((err) => {
        console.log("Ha ocurrido un error", err)
        })
}

window.onload = () => {
    allowUser()
    cargaTodosLosCombos()
    adminUsuarioCargaCredencial()
}
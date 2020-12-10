const urlBase = "http://localhost:62594/api/v1"

var usuarioLabel = document.getElementById("Usuario")


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


document.getElementById("btn_Modificar4").addEventListener("click", modificarCombo4)
function modificarCombo4(){
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

document.getElementById("btn_Modificar3").addEventListener("click", modificarCombo3)
function modificarCombo3(){
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

document.getElementById("btn_Modificar2").addEventListener("click", modificarCombo2)
function modificarCombo2(){
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

document.getElementById("btn_Modificar1").addEventListener("click", modificarCombo1);
function modificarCombo1(){

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
}

var Login = () => {
    localStorage.removeItem("datosSesion")
    window.location.href = "http://localhost:3000/index.html"
}

window.onload = () => {
    cargaTodosLosCombos()
}
const urlBase = "http://localhost:62594/api/v1"


var in_Usuario = document.getElementById("in_Usuario")
var in_Contraseña = document.getElementById("in_Contraseña")

var btn_Ingresar = () => {

    var datos = {
        Nombre : in_Usuario.value,
        Contraseña : in_Contraseña.value
    }

    if (datos.Nombre == "Manuel" && datos.Contraseña == "666"){
        console.log(datos)
        var url = urlBase + "/loginSU"
    
       fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(datos)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            if(data.login)
            {
                var datosSesion= {
                    login: true,
                    data: data.id,
                    nombre: data.nombre 
                }
                localStorage.setItem("datosSesion",JSON.stringify(datosSesion))
                window.location.href = "http://localhost:3000/admin.html"
                alert("ingreso el super usuario")
            }
        }).catch((err) => {
            console.log("ERROR EN LA API LOGIN",err)
        })
    }
    else{
        console.log(datos)
        var url = urlBase + "/loginEmpleado"
    
       fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(datos)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            if(data.login)
            {
                var datosSesion= {
                    login: true,
                    data: data.id,
                    nombre: data.nombre 
                }
                localStorage.setItem("datosSesion",JSON.stringify(datosSesion))
                window.location.href = "http://localhost:3000/empleado.html"
                alert("ingreso un usuario normal")
            }
        }).catch((err) => {
            console.log("ERROR EN LA API LOGIN",err)
        })
    }


}

window.onload = () => {

    var datosSesion = localStorage.getItem("datosSesion")
    if (datosSesion != null)
    {
        datosSesion = JSON.parse(datosSesion)
        if (datosSesion.nombre == "Manuel")
            window.location.href = "http://localhost:3000/admin.html"
        else
            window.location.href = "http://localhost:3000/empleado.html"

    }
}

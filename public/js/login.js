var in_Usuario = document.getElementById("in_Usuario")
var in_Contraseña = document.getElementById("in_Contraseña")

var btn_Ingresar = () => {

    var datos = {
        Nombre : in_Usuario.value,
        Contraseña : in_Contraseña.value
    }

    if (datos.Nombre == "Admin" && datos.Contraseña == "admin"){
        window.location.href = "admin.html"
        alert("Ingresaste como super usuario")
    }
    else if (datos.Nombre == "Emp" && datos.Contraseña == "emp"){
        window.location.href = "empleado.html"
        alert("Ingresaste como empleado") 
    }
    else{
        alert("Usuario o contraseña incorrecta") 
    }

}

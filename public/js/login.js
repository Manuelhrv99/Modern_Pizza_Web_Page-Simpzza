$("#Mensaje").hide().html();

/*
var btn_Ingresar = () => {
    location.href = "user_index.html"

    var in_Usuario = document.getElementById("in_Usuario")
    var in_Contraseña = document.getElementById("in_Contraseña")
    if(in_Usuario == 'Manuel' && in_Contraseña == 1234)
    {
        location.href = "http://127.0.0.1:5500/Simpzza/public/index.html"
        window.location.replace("index.html");
    }
    else
    {
        
    }
}*/

var in_Usuario = document.getElementById("in_Usuario")
var in_Contraseña = document.getElementById("in_Contraseña")

/*var btn_Ingresar = () => {
    if (in_Usuario == "Manuel" && in_Contraseña == "666"){
        window.location.href = "http://localhost:3000/admin.html"
    }else{
        if (in_Usuario == "Mauricio" && in_Contraseña == "54321"){
            window.location.href = "http://localhost:3000/empleado.html"
        }else{
            $("#Mensaje").show()
        }
    }
}*/

document.getElementById("btn_Ingresar").addEventListener("click", Ingresar);

function Ingresar(){
    console.log("Si funciona");
    if (in_Usuario === "Manuel" && in_Contraseña === 666){
        window.location.href = "http://localhost:3000/admin.html"
    }else{
        if (in_Usuario == "Mauricio" && in_Contraseña == "54321"){
            window.location.href = "http://localhost:3000/empleado.html"
        }else{
            $("#Mensaje").show()
        }
    }
}

window.onload = () => {
    console.log("Prueba")
}
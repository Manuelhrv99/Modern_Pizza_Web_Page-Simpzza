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
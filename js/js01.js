function contrasenaValida(){
    let contrasena = prompt("Ingrese una Contraseña Valida");
    if ((contrasena === "2Fj(jjbFsuj") || (contrasena === "eoZiugBf&g9")){
        return true
    }else{
        return false
    }
}

alert(contrasenaValida())
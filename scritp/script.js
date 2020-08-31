let usu = "Pepito";
let pass = 234;


function login(){
    let usuario = prompt("Ingres un usuario");
    let contra = parseInt(prompt("ingrese una contraseña"));
    if (usuario == usu && contra == pass) {
        alert("bienvenido " + usu);
    } else {
        alert("usuario o contraseña incorreto");
    }
}
/* const se utiliza para guardar elementos u etiquetas que no van a cambiar es un valor que no cambia!!! :)
let es una variable que si puede cambair en este caso lo usamos para traer el valor ingresado dentro de una etiqueta puede cambiar !!! :)*/ 
const eventoForm = document.getElementById("evento");

/* función tipo flecha (arrowFunction) tanto function (tradicional) como la función anonima pueden ser anonima  */ 
let usuarioPrueba = "admin";
let passPrueba = "1234";

eventoForm.addEventListener("click", (event)=>{
    event.preventDefault();


    let usuarioF = document.getElementById("usuForm").value;
    let passwordF = document.getElementById("contraForm").value;
    
    
    if(usuarioF === '' || passwordF === '') {swal ( "¡ Debes diligenciar todos los campos " );
    } 
    else if (usuarioF == usuarioPrueba && passwordF == passPrueba ) {

        swal("Exitoso!", "ok!", "success");
        setTimeout(() => window.location = "./hola.html", 2500)
        
    } else  {
        swal("Fallido!", " Usuario o contraseña incorrecta!", "error");

    }
    
    
    

});

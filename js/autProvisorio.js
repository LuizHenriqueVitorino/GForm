
function logar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email=='henrique@gmail.com' && senha=='123456') {
        location.href = "home.html";
    }
    else{
        alert("Email ou senha incorreta")
    }
}

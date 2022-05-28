window.onload = init;
var headers = {};

function init(){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Main.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', alta);
    }
    else{
        window.location.href="login.html";
    }
}

function alta() {
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var number = document.getElementById('input-number').value;
    var mail = document.getElementById('input-mail').value;
    var direction = document.getElementById('input-direction').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/empleados/',
        data: {
            nombre: name,
            apellidos: lastname,
            telefono: number,
            correo: mail,
            direccion: direction
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}
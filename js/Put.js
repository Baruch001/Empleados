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
    
        document.querySelector('.btn-primary').addEventListener('click', put);
    }
    else{
        window.location.href="login.html";
    }
}


function put() {
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var number = document.getElementById('input-number').value;
    var mail = document.getElementById('input-mail').value;
    var direction = document.getElementById('input-direction').value;

    axios({
        method: 'put',
        url: 'http://localhost:3000/empleados/'+name,
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
        alert("Actualizacion exitosa");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}
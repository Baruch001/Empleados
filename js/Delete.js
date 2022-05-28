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
    
        document.querySelector('.btn-primary').addEventListener('click', del);
    }
    else{
        window.location.href="login.html";
    }
}

function del() {
    var name = document.getElementById('input-name').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/empleados/'+name,
        data: {
            nombre: name
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res) {
        console.log(res);
        alert("Baja exitosa");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}
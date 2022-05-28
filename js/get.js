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
    
        document.querySelector('.btn-primary').addEventListener('click', get);
    }
    else{
        window.location.href="login.html";
    }
}


function get() {
    var name = document.getElementById('input-name').value;
    var table = document.querySelector("table");

    axios.get("http://localhost:3000/empleados/"+name, headers).then(function(res){
        console.log(res);
        for(var i=0;i<res.data.message.length;i++){
            table.innerHTML += `
          <tr>
            <td>${res.data.message[i].nombre}</td>
            <td>${res.data.message[i].apellidos}</td>
            <td>${res.data.message[i].telefono}</td>
            <td>${res.data.message[i].correo}</td>
            <td>${res.data.message[i].direccion}</td>
          </tr>`;
            
        }
    }).catch(function(err){
        console.log(err);
    })
}

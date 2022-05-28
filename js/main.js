window.onload = init;

function init(){
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-primary').addEventListener('click', function(){
            window.location.href = "Post.html"
        });

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Delete.html"
        });
    
        document.querySelector('.btn-thirty').addEventListener('click', function(){
            window.location.href = "Put.html"
        });

        document.querySelector('.btn-fourty').addEventListener('click', function(){
            window.location.href = "Get.html"
        });
    }
    else{
        window.location.href = "login.html"
    }
}

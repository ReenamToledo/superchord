function logar() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "admin" && password == "admin") {
        alert("Success");
        location.href = "home.html"
    }else{
        alert("Incorrect username or password");
        location.href = "return.html"
    }
    
};
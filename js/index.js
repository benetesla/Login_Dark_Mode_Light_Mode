let rootProp = document.documentElement.style;
let mode = true;

function ChangeModel() {
    if (mode) {
        darkmode();
        
    } else {
        lightmode();
    }
    mode = !mode;
}
function lightmode() {
    rootProp.setProperty("--backgound-color", "rgba(230, 230,230);");
    rootProp.setProperty("--shadow1", "rgba(119, 119, 119,0.5)");
    rootProp.setProperty("--shadow2", "rgba(225, 225, 225,0.85)");
    rootProp.setProperty("--label-color", "rgba(0, 0, 0,0.8)");
    
}
function darkmode() {
    rootProp.setProperty("--backgound-color", "rgba(0, 0, 0);");
    rootProp.setProperty("--shadow1", "rgba(0, 0, 0,0.5)");
    rootProp.setProperty("--shadow2", "rgba(0, 0, 0,0.85)");
    rootProp.setProperty("--label-color", "rgba(255, 255, 255,0.8)");
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}
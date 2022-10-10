var menuListener = document.getElementById('menulist');
menuListener.style.maxHeight = "0px";

function menuToggle() {
    if (menuListener.style.maxHeight == "0px") {
        menuListener.style.maxHeight = "100vh";
    } else {
        menuListener.style.maxHeight = "0px";
    }
}
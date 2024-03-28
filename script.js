function openContactForm() {
    var popup = document.getElementById("contactPopup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
}

function closeContactForm() {
    var popup = document.getElementById("contactPopup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}

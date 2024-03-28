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
function showPage(pageId) {
    var pages = document.querySelectorAll('.content');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById(pageId).style.display = 'block';
}

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

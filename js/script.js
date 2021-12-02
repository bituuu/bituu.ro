var header = document.getElementById('header');
var headerImage = document.getElementById('header-image');

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = "rgba(0,0,0,0.9)";
        header.style.height = "100px";
        headerImage.style.height = "100px";
        headerImage.style.width = "100px"; 
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.height = "130px";
        headerImage.style.height = "130px";
        headerImage.style.width = "130px";
    }
})
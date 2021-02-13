const header = document.querySelector('header');
let number = 0;

window.addEventListener('scroll' , function() {
    if(window.scrollY > 1) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        header.style.transition = "box-shadow .5s";
        header.style.boxShadow = "0 1px 8px 1px #131313";
    }
    else {
        header.style.backgroundColor = "";
        header.style.boxShadow = "";
    }
})

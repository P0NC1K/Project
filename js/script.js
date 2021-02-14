const header = document.querySelector('header');
const categories = document.querySelectorAll('.category');
const images = document.querySelectorAll('.image');
const list = document.querySelectorAll('.list');
let number = 0;

filterImages('all');
/////////////////////////////////////////
function filterImages(c) {
    let x = document.getElementsByClassName("image-block"); 
    
    if(c == "all")
        c = "";

    for(let i=0; i<x.length; i++) {
        removeImage(x[i] , "show");
        if(x[i].className.indexOf(c) > -1)
            addImage(x[i] , "show"); 
    }
}

function removeImage(element , name) {
    let arr1 = element.className.split(" ");

        if(arr1.indexOf(name) > -1)
            arr1.splice(arr1.indexOf(name), 1);

    element.className = arr1.join(" ");
}

function addImage(element , name) {
    element.className += " " + name; 
}

function insertNavStyle() {
    if(window.scrollY > 1) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        header.style.transition = "box-shadow .5s";
        header.style.boxShadow = "0 1px 8px 1px #131313";
    }
    else {
        header.style.backgroundColor = "";
        header.style.boxShadow = "";
    }
}

//NavStyle
window.addEventListener('scroll' , function() {
    insertNavStyle();
});

//category underline changing
categories.forEach(item => {
    item.addEventListener('click' , function() {
        let activeClass = document.getElementsByClassName('default');
        activeClass[1].className = activeClass[1].className.replace("default" , "");
        item.className += " default";
    })
})

// filter Images onclick
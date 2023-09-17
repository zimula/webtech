const images = ["img/Root.PNG","img/Cpo.PNG","img/Hapi.PNG"];
const btn = document.querySelector(".dark");
const gallery = document.querySelector(".thumb-bar");

//load gallery
images.forEach(x =>{
    const img = document.createElement("img");
    img.src = x;
    gallery.appendChild(img);
})


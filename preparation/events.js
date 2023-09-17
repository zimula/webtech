const btn = document.querySelector("#btn");

//function to randomize rgb values. 
function random(number){
    return Math.floor(Math.random()*(number*1));
}

btn.addEventListener("click", ()=>{
    //focus: activated when element is selected. 
    //blur: when unselected. Etc.  
    //alert("hello");
    const direction = Math.round(Math.random()*360);
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    //`rgb(${random(255)}, ${random(255)}, ${random(255)})`
    //linear-gradient(70deg, red, blue)
    document.body.style.backgroundColor = color;
//try again with linear gradient

});

//Using internal js, put function inside this container. 
        //document.addEventListener("DOMContentLoaded",()=>{});
//Otherwise use "defer" on script. 



//Simple code to replace text with input
const player = document.querySelector("p");
player.addEventListener("click", updateName);

function updateName(){
    const name = prompt("enter name");
    player.textContent = `Player 1: ${name}`;
}



//Generate content based on input/action
function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "You clicked me";
    document.body.appendChild(para);
}
const buttons = document.querySelectorAll("button");
for(x of buttons){
    x.addEventListener("click",createParagraph);
}
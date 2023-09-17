//customizing alert box

//function to display message
function displayMessage(msgText, msgType){
    const body = document.body;

    const panel = document.createElement("div");
    //switching css class mid flight
    panel.setAttribute("class", "msgBox");
    //adding elements to document mid flight.
    body.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = msgText;//changed it to one of the parameters. 
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent="x";
    panel.appendChild(closeBtn);

    closeBtn.addEventListener("click", ()=>{
    panel.parentNode.removeChild(panel);
});
//changing function behavior based on parameters
if(msgType === "warning"){
    panel.style.backgroundColor = "red";
}else if(msgType === "chat"){
    panel.style.backgroundColor = "green";
}else{
    panel.style.backgroundColor = "blue";
}
    
}
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    displayMessage("Woo, this is a different message!", ""); //always convert to arrow function if it includes parameters. 
});



const pressed = document.querySelector("#test");
const output = document.querySelector("#output");
const clear = document.querySelector("#Clear");

alert(`This is a message`);
/*function logKey(){
    console.log(`You pressed "${event.key}".`);
}
pressed.addEventListener("keydown", logKey);*/

//Same thing using an ANONYMOUS function. 
/*pressed.addEventListener("keydown", function(event){
    console.log(`You pressed "${event.key}".`);
});*/

//same thing ARROW function. 
pressed.focus();
pressed.addEventListener("keydown", (event)=>{
    console.log(`You pressed "${event.key}".`);
    output.textContent = `You pressed "${event.key}".`;
   
    
});
clear.addEventListener("click", ()=>{pressed.value = ""});

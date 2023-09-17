//Intro to canvas manipulation. 
const canvas = document.querySelector("#canvas0");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

/*Looping over a collection like an array:
    for(const x of array){console.log(x);}
    
*/

/*Manipulate elements as you loop and add them to new array.
Map():  array.map(manipulate elements);*/

/*Specific elements from list or array
filter(): just add a criterion to the filter. 
the criterion can be a function.  */


//Print using loop.
const result = document.querySelector("#results");
const print1 = document.querySelector("#print");
const erase = document.querySelector("#erase");

function calculate(){
    for(let i = 1; i < 10;i++){
        const new_results = `${i}x${i} = ${i*i}`;

        result.textContent += `${new_results}\n`;
       
    }
    result.textContent+= "\nFinished";
}

print1.addEventListener("click", calculate);
erase.addEventListener("click", ()=>{result.textContent = ""});


//Searching through a list
const contacts = [
    "Chris: 2240", 
    "Hans: 4290",
    "Ben: 20202", 
    "Dennis: 1111",
    "Phiona: 2343"
];

const info = document.querySelector("#contact");
const input = document.querySelector("#search");
const btn = document.querySelector("#searchBtn");

btn.addEventListener("click", ()=>{
    const match = input.value.toLowerCase();
    input.value = "";
    input.focus;
    info.textContent = "";

    for(const contact of contacts){
        const splitContact = contact.split(":");
        if(splitContact[0].toLowerCase() === match){
            info.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
            break;//exists loop. Continue is used to move on to the next iteration. 
        }
    }
    if(info.textContent === ""){
        info.textContent = "Contact not found.";
    }
});
/*Other loops: 
- while: 
- do while: */


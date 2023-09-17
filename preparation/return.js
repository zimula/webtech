//Returning values from functions. 
const input = document.querySelector(".numberInput");
const para = document.querySelector(".para");

    //the functions
function squared(num){
    return num*num;
}
function cubed(num){
    return num*num*num;
}
function factorial(num){
    if(num<0) return undefined;
    if(num === 0) return 1;
    let x = num - 1;
    while(x > 1){
        num *= x;
        x--;
    }
    return num;
}
input.focus()
    //getting input
input.addEventListener("change", ()=>{
    const num = parseFloat(input.value);
    if(isNaN(num)){//test whether number
        para.textContent = "You need to enter a number!"; 
    }else{
        para.textContent = "Well done.";
        para.textContent += `${num} squared is ${squared(num)}. `;
        para.textContent += `${num} cubed is ${cubed(num)}. `;;
        para.textContent += `${num} fatorial is ${factorial(num)}.`;;
    }
    input.focus();
});
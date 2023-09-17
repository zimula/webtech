const select = document.querySelector("#weather");
const para = document.querySelector("#remark");

select.addEventListener("change", setRemark);

function setRemark(){
    const choice = select.value;//value set in html

    if(choice === "sunny"){
        para.textContent = "It is nice and sunny outside today.";
        para.style.background = "yellow";
    } else if(choice ==="rainy"){
        para.textContent = "It is raining outside.";
        para.style.background = "blue";
    }else if(choice === "snowing"){
        para.textContent = "It is snowing outside";
        para.style.background = "white";
    }else if(choice === "overcast"){
        para.textContent = "No rain but gray and gloomy.";
        para.style.background = "gray";
    }else{
        para.textContent = "";
    }
}//can be nested



/*same thing using SWITCH-CASE:
    - more readable*/
const select1 = document.querySelector("#weather1");
const para1 = document.querySelector("#remark1");

select1.addEventListener("change", setRemark1);

function setRemark1(){
    const choice1 = select1.value;

    //expression(choice) and scenarios. 

    switch(choice1){
        case "sunny":
            para1.textContent = "It is sunny outside.";
            para1.style.background = "yellow";
        break;
        case "rainy":
            para1.textContent = "It is raining outside.";
            para1.style.background = "blue";
        break;
        case "snowing":
            para1.textContent = "It is snowing.";
            para1.style.background = "white";
        break;
        case "overcast":
            para1.textContent = "No rain but cloudy and gloomy.";
            para1.style.background = "gray";
        break;
        default:
            para1.textContent = "";

    }
}

/*similar thing using TERNARY OPERATOR
    - perfect for binary options
    - ? condition ? run this code : run this code instead*/
    const select2 = document.querySelector("#theme");
    const html = document.querySelector("html");
    const cont = document.querySelector(".container");

    //function to update background color.
    function updateColor(bgColor, textColor){
        html.style.backgroundColor = bgColor;
        cont.style.backgroundColor = bgColor;
        html.style.color = textColor;
    }

    select2.addEventListener("change", () =>{
        select2.value === "black"
        ?updateColor("black", "white")
        :updateColor("white", "black");
    });



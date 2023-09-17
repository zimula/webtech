/* Objective
- Hide menu on small devices
- Hide menu on logo click
- add overview panels to array
- change price color based on + or - daily change
- make panel shake on focus
- create/ find api data delivers more market data*/
const logo = document.getElementsByClassName("logo1")[0];
const btn1 = document.querySelector("#theme");
const theme = document.querySelector("#theme")[0];
const container = document.querySelector(".container-1");
const themeSwitch = document.querySelector(".fa-toggle-off");

logo.addEventListener("mousedown", ()=>{alert("I should probably hide the menu");});
btn1.addEventListener("mousedown", change_back);


//Switch case to change the container's background color.
function change_back (){
    switch(container.getAttribute("class")){
        case "container-1":
            //alert("hello");
            container.setAttribute("class", "container-jav");
            themeSwitch.setAttribute("class", "fas fa-toggle-on");
        break;
        case "container-jav":
            //alert("yeah");
            container.setAttribute("class", "container-1");
            themeSwitch.setAttribute("class", "fas fa-toggle-off");
        break;  
    }
}
//price place holders
//24hr change place holders
//market cap place holders
//supply place holders
//load asset data in as json object 
//automate card creation from json or text data. 

   const buttonA = document.querySelector("#button_A");
   const headingA = document.querySelector("#heading_A");
   const startIt = document.querySelector(".startb");
   const itsStatus = document.querySelector(".statusb");


   //prompt, alert and textcontent
   buttonA.addEventListener("click", updateName);
   function updateName(){
    const name = prompt("Please enter your name");
    alert(`Welcome ${name}. Your will be added to the list shortly :-)`);
    headingA.textContent = name;
   }
   //events and conditions. 
   startIt.addEventListener("click", updateMachineState);
   function updateMachineState(){
    if(startIt.textContent === "Start machine"){
        startIt.textContent = "Stop machine";
        itsStatus.textContent = "The machine is running";
        itsStatus.style.color = "green";
        startIt.style.background = "red";
    }else{
        startIt.textContent ="Start machine";
        itsStatus.textContent = "The machine is stopped";
        itsStatus.style.color= "red";
        startIt.style.background = "green";
    }
   }
   //Arrays
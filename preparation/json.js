//DEALING WITH JSON FILES. 
    //create async function to api. 
async function populate(){
    //variable to store the source
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    //create a request object
    const request = new Request(requestURL);
    //network request using fetch, returns response
    const response = await fetch(request);
    //retrieving json using response
    const superHeroes = await response.json();
            //json.parse() and stringify() can be used to switch btwin json and text files. 

    //calling dom manipulators. 
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

//POPULATING THE HEADER: data from json to page. 
function populateHeader(obj){
    const header = document.querySelector("header");

    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadname;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent =`Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}

//ADDING DATA TO SECTION
function populateHeroes(obj){
    
    const section = document.querySelector("section");
    const heroes = obj.members;

    //looping through hero list. 
    for(const hero of heroes){

        //generating dom elements
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const  myList = document.createElement("ul");

        //adding data to h2 and paras
        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = `Superpowers:`;

        //adding data to list
        const superPowers = hero.powers;
        for(const power of superPowers){
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem);
        }
        
        //posititon elements. 
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
populate();

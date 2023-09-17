/*ARRAYS: a way of storing lists of data under a single variable name.
    - nice way to deal with large lists
    - operations on individual items
    - operations on all items
    - add, remove, modify.
*/


//CREATING ARRAYS:
const my_array = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(my_array);
    
    //an array can hold multiple data types (string, int, objects, etc.)
const my_array2 = [1, "string", [0,1,3]]
console.log(my_array2[2][2]);//accessing array inside array (print 3 in inner array)
    
    //length of an array.
console.log(my_array2.length);//3
    
    //modifying array items
my_array2[1] = "testing";
console.log(my_array2)
    
    //finding index of an array item
console.log(my_array2.indexOf(1));
    
    //add items to array
const towns = ["Kolding", "Silkeborg"];
towns.push("Odense", "Esbjerg", "Aarhus");
console.log(towns);
    
    //adding item at the beginning of rary
towns.unshift("Viborg");
console.log(towns);
    
    //removing last item from array
towns.pop();
console.log(towns);
    
    //asign removed items to new array
const missingTown = towns.pop();
console.log(missingTown);
    
    //removing first item
towns.shift();
console.log(towns);
    
    //remove based on index number (Odense)
const index = towns.indexOf("Odense");
if(index !== -1){
    towns.splice(index, 2);
}
console.log(towns);
    
    //looping through array (my_array)
for(const x of my_array){
    console.log(x)
}

    //modifying all array items. 
function capitalize(i){
    //function to captalize
    return i.toUpperCase();
}
const large = my_array.map(capitalize);
console.log(large);
    
    //running tests on items (length > 4)
function isLong(j){
    return j.length > 4;
}
const long = my_array.filter(isLong);
console.log(long);
    
    //convert string into array¨
const data = "shoe, house, road, clouds, electricity";
const random = data.split(",");
console.log(random);

    //array into string (array.toString(); can do the same thing)
const back2string = random.join(",");
console.log(back2string);
//**************************************************************** */


//DISPLAY AN ARRAY AS PRODUCTS AND PRICES. 
const list = document.querySelector('.outputUl');
const totalbox = document.querySelector('.outputP');
let total = 0;
list.innerHTML = " ";
totalbox.textContent = "";

const products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];
//loop through products. 
for(const x of products){
    const subAr = x.split(":");
    const name = subAr[0];
    const price = subAr[1];
    total += price;
    const itemText = `${name} : ${price}`;

    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}
//One more for 



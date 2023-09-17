//synchronous code is sequential.
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);

    //generate long prime numbers
    const MAX_PRIME = 1000000;

    //validate prime
    function isprime(n){
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        }
        return n > 1;
    }

    const random = (max)=> Math.floor(Math.random() * max);
            //generating primes
    function generatePrimes(quota){
        const primes = [];
        while(primes.length < quota){
            const candidate = random(MAX_PRIME);
            if(isprime(candidate)){
                primes.push(candidate);
            }
        }
        return primes;
    }
            //referencing document
    const quota = document.querySelector("#quota");
    const output = document.querySelector("#output");
        //generate button functionality
    document.querySelector("#generate").addEventListener("click", ()=>{
        const primes = generatePrimes(quota.value);
        output.textContent = `Finished generating ${quota.value} primes!`;
    });
        //reloading button functionality
    document.querySelector("#reload").addEventListener("click", ()=>{
        document.location.reload();
    });



//ASYNC CODE: 
const  log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", ()=>{
    log.textContent = "";

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", ()=>{
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });
    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
    );
    xhr.send();
    log.textContent =`${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload1").addEventListener("click", ()=>{
    log.textContent = "";
    document.location.reload();
});


//referencing items in the document
var btc = document.getElementById("bitcoin");
var hapi = document.getElementById("hapi");
var eth = document.getElementById("ethereum");
var xrp = document.getElementById("xrp");
var root = document.getElementById("root");
var qnt = document.getElementById("qnt");
var cpo = document.getElementById("cpo");
//percentage change
const btc_change = document.getElementById("btc-change");
const hapi_change = document.getElementById("hapi-change");
const eth_change = document.getElementById("eth-change");
const xrp_change = document.getElementById("xrp-change");
const root_change = document.getElementById("root-change");
const cpo_change = document.getElementById("cpo-change");
const logo1 = document.getElementsByClassName("logo")[0];
//byclassname returns entire array. 


logo1.addEventListener("click", ()=>{alert("hello")});
//COIN GECKO API
var settings = {
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=hapi%2Cripple%2Cwoo-network%2Cquant-network%2Ccryptopolis%2Cbitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=4",
    "method": "GET",
    "headers": {}
}


//displaying data on the site
$.ajax(settings).done(function(response){
    console.log(response);
    btc.innerHTML = response.bitcoin.usd.toFixed(2);
    hapi.innerHTML = response.hapi.usd.toFixed(2);
    eth.innerHTML = response.ethereum.usd.toFixed(2);
    xrp.innerHTML = response.ripple.usd.toFixed(2);
    cpo.innerHTML = response.cryptopolis.usd.toFixed(4);
    

    root.innerHTML = "N/A";  
    //%change  
    btc_change.innerHTML = response.bitcoin.usd_24h_change.toFixed(2);
    hapi_change.innerHTML = response.hapi.usd_24h_change.toFixed(2);
    eth_change.innerHTML = response.ethereum.usd_24h_change.toFixed(2);
    xrp_change.innerHTML = response.ripple.usd_24h_change.toFixed(2);
    cpo_change.innerHTML = response.cryptopolis.usd_24h_change.toFixed(2);
    root_change.innerHTML = "N/A"

    
    
});



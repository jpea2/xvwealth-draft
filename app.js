let coins = [
    {
        ticker: "XRP",
        price: 0.55,
        holdings: 500
    },
    {
        ticker: "ETH",
        price: 7.5,
        holdings: 20
    },
    {
        ticker: "BTC",
        price: 20000,
        holdings: 2
    }
];


let ticker = document.querySelector("#ticker");
let price = document.querySelector("#price");
let holdings = document.querySelector("#holdings");

for (let i = 0; i < coins.length; i++) {
    ticker.innerHTML += `<li>${coins[i].ticker}</li>`;
    price.innerHTML += `<li>${coins[i].price}</li>`;
    holdings.innerHTML += `<li>${coins[i].holdings}</li>`;
}
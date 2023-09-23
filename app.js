let xrp = {
    ticker: ["XRP"],
    price: 0.55,
    holdings: 500,
};

let ethereum = {
    ticker: ["ETH"],
    price: 7.5,
    holdings: 2000,
};

let bitcoin = {
    coins: ["BTC"],
    price: 20000,
    holdings: 2,
};


let listText = document.querySelector("#listOfCoins");

for (let i = 0; i < list.coins.length; i++) {
    listText.innerHTML += `<li>${
        coins + price + holdings
    }</li>`;
}

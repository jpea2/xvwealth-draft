let coins = [
    {
        ticker: "XRP",
        price: 0.55,
        holdings: 500,
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
    },
    {
        ticker: "AMP",
        price: 1,
        holdings: 2000
    }
];


let ticker = document.querySelector("#ticker");
let price = document.querySelector("#price");
let holdings = document.querySelector("#holdings");
let displayValue = document.querySelector("#valueOfHoldings")

let totalValue = 0;

for (let i = 0; i < coins.length; i++) {
    ticker.innerHTML += `<li>${coins[i].ticker}</li>`;
    price.innerHTML += `<li>${coins[i].price}</li>`;
    holdings.innerHTML += `<li>${coins[i].holdings}</li>`;
    displayValue.innerHTML += `<li>$${coins[i].price * coins[i].holdings}</li>`;

    // Calculate and add to total value
    totalValue += coins[i].price * coins[i].holdings;
}
    
    // Display total portfolio value
document.querySelector("#totalValue").innerHTML = `<b>Portfolio Value:</b> $${totalValue}`;


function addCoin(ticker, price, holdings) {
    coins.push({
        ticker: ticker,
        price: price,
        holdings: holdings
    });
}

// Submit form handler
document.getElementById('addCoinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let ticker = document.getElementById('ticker-input').value;
    let price = parseFloat(document.getElementById('price-input').value);
    let holdings = parseInt(document.getElementById('holdings-input').value);

    addCoin(ticker, price, holdings);
    displayCoins()
});

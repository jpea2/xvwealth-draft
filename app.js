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

function displayCoins() {
    ticker.innerHTML = `<li><u><b>Ticker</b></u></li>`;
    price.innerHTML = `<li><u><b>Price</b></u></li>`;
    holdings.innerHTML = `<li><u><b>Holdings</b></u></li>`;
    displayValue.innerHTML = `<li><u><b>Value</b></u></li>`;

    totalValue = 0;  // Reset total value before calculating


    for (let i = 0; i < coins.length; i++) {
        ticker.innerHTML += `<li>${coins[i].ticker}</li>`;
        price.innerHTML += `<li>${coins[i].price}</li>`;
        holdings.innerHTML += `<li>${coins[i].holdings}</li>`;
        displayValue.innerHTML += `<li>$${coins[i].price * coins[i].holdings}</li>`;
        
        totalValue += coins[i].price * coins[i].holdings;
    }

    document.querySelector("#totalValue").innerHTML = `<b>Portfolio Value:</b> $${totalValue.toFixed(2)}`;

}

function addCoin(ticker, price, holdings) {
    coins.push({
        ticker: ticker,
        price: price,
        holdings: holdings
    });

    displayCoins(); // Update the display after adding a coin
}

document.getElementById('addCoinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let ticker = document.getElementById('ticker-input').value;
    let price = parseFloat(document.getElementById('price-input').value);
    let holdings = parseFloat(document.getElementById('holdings-input').value);

    addCoin(ticker, price, holdings);
});

// Display coins initially
displayCoins();


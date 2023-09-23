let list = {
    coin: "XRP",
    holdings: 500,
    price: 0.55,

    coin: "Bitcoin",
    holdings: 2.4,
    price: 24000
};

let listText = document.querySelector("#listOfCoins")

for (i = 0; i < list.coin.length; i++){
    listText.innerHTML = <li> + $list.coin[i] + </li>
}
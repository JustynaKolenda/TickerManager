function showTickers() {
    tickers.forEach(function(title) {
        addNewTicker(title)
    })
}

function removeTicker(ticker) {
    var liToRemove = ticker.closest('li');
    ticker.closest('ul').removeChild(liToRemove);
}
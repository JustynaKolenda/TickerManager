var newTickerForm = document.querySelector('.tickerManager--form form');
var tickerContainer = document.querySelector('.tickerManager--list ul');

document.addEventListener('DOMContentLoaded', function() {
    bindAddTickerEvents();
    showTickers();
})
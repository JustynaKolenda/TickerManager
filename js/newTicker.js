function addNewTicker(title){
    var tickerLi = document.createElement('li');

    tickerLi.classList.add('tickerManager--newTicker');
    tickerLi.innerHTML = prepareTickerHTML(title);

    var deleteTicker = tickerLi.querySelector('.exit-button');
    deleteTicker.addEventListener('click', function(){
        removeTicker(this)
    })

    tickerContainer.appendChild(tickerLi);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    $("#color").css("background-color", getRandomColor());
}

function prepareTickerHTML(title) {
   return '<button class="exit">' +
           ' <i id="color" class="exit--color"></i>' +
           ' <span class="exit--title">' + title + '</span> ' +
           ' <button class="exit-button"><i class="fa fa-times"></i></button> ' +
       ' </button>'
}


function bindAddTickerEvents() {
    newTickerForm.addEventListener('submit' , function(event){
        event.preventDefault();
        var title = this.querySelector('input').value;

        if(title){
            addNewTicker(title);
        }
       
    })
}
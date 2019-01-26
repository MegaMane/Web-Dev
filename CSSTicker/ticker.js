console.log('connected');

var tickerElements = ["Life Time Sales: $9999.99", "Location: Kalamazoo", "Units on Order: 10,000.00", "Last Sold For: $9.99"]

var div = document.createElement('div');
div.className = 'ticker';

for(var i= 0; i < tickerElements.length; i++) {
    var elem = document.createElement('div');
    elem.className = 'ticker__item'

    elem.appendChild(document.createTextNode(tickerElements[i]));

    div.appendChild(elem)
}

//console.log(div);

var tickerWrapper = document.querySelector(".ticker-wrap")
tickerWrapper.appendChild(div);
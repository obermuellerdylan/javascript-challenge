var events = data

var form = d3.select('#form');
var button = d3.select('#filter-btn');

form.on('submit', runEnter);
button.on('click', runEnter);

function runEnter() {
    tbody = d3.select("tbody");
    tbody.html('')

    d3.event.preventDefault();

    var inputElement = d3.select('#form-input');
    
    var inputValue = inputElement.property('value');
    

    filteredData = events.filter(event => event.datetime === inputValue);
    
   
    

    filteredData.forEach((event) => {
        var row = tbody.append("tr");
        Object.entries(event).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};
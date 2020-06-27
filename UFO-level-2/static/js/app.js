// from data.js
var tableData = data;

// GET TABLE TO POPULATE
var tbody = d3.select("tbody");

//data report values (date, city, state, country, shape, duration, comments)
data.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    
    Object.entries(ufoReport).forEach(function([key, value]) {
        //Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
    });
});


//GET FILTER TO WORK
// Select the button

// Select the form
var form = d3.select(".form-group")
var button = d3.select("button");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    var body = document.getElementById("ufo-body");
    body.innerHTML = "";

    //Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#incity");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValueCity = inputCity.property("value");
    var inputValueState = inputState.property("value");
    var inputValueCountry = inputCountry.property("value");
    var inputValueShape = inputShape.property("value");
  
    console.log(inputValue);
    console.log(inputValueCity);
    console.log(inputValueState);
    console.log(inputValueCountry);
    console.log(inputValueShape);
  
    var filteredData = data.filter(x => x.datetime === inputValue).
    filter(y => y.city == inputValueCity).
    filter(z => z.state == inputValueState).
    filter(a => a.country == inputValueCountry).
    filter(b => b.shape == inputValueShape);

    filteredData.forEach(function(filteredReport) {
        

        var row = tbody.append("tr");

        
        Object.entries(filteredReport).forEach(function([key, value]) {
            //Append a cell to the row for each value in the report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
    console.log(filteredData)
}
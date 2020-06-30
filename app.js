// Reference to the table body 

var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

// // console.log the UFO data 
// console.log(tableData);

// data.forEach(function(tableData){
//     console.log(tableData)
// });

// // Use D3 to append table
// data.forEach(function(tableData){
//     console.log(tableData)
//     var row = tbody.append("tr");
// });


// Use object.entries to console.log each UFO value

// data.forEach(function(tableData) {
//     console.log(tableData)
//     var row = tbody.append("tr");

//     Object.entries(tableData).forEach(function([key, value]){
//         console.log(key,value);
//     });
// });

// Use D3 to append cells per each UFO value

// data.forEach(function(tableData) {
//     console.log(tableData)
//     var row = tbody.append("tr");

//     Object.entries(tableData).forEach(function([key, value]){
//         console.log(key,value);

//         var cell = tbody.append("tr");
//     });
// });

// Use D3 to update each cell's text

// data.forEach(function(tableData) {
//     console.log(tableData)
//     var row = tbody.append("tr");

//     Object.entries(tableData).forEach(function([key, value]){
//         console.log(key,value);

//         var cell = tbody.append("tr");
//         cell.text(value);
//     });
// });


// data.forEach(function(tableData) {
//     console.log(tableData)
//     var row = tbody.append("tr");

//     Object.entries(tableData).forEach(function([key, value]){
//         console.log(key,value);

//         var cell = tbody.append("tr");
//         cell.text(value);
//     });
// });

// --- WORKING CODE (DRAFT) ----

// ----FINAL CODE---- 

// Filter Form 
submit.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

// Append Data
    tbody.text('');
    filteredData.forEach(record => {
        var row = tbody.append('tr');
        Object.entries(record).forEach(([key, value]) => {
            row.append('td').text(value);
});
});
});

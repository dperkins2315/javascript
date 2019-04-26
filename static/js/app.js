// from data.js
var tableData = data;
var Filter = '';

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach((ufo) => {
   var row = tbody.append("tr");
   Object.entries(ufo).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
   });
});

function FilterSet(){
    //Filter = document.getElementById("datetime").options[datetime.selectedIndex].text;
    Filter = document.getElementById("datetime").value;
    console.log(Filter);
   };

function buildOn(){
    console.log('got here');
    var splitData = tableData;
    splitData = splitData.filter(function(i){
        return i.datetime===Filter;
    });
    
var tbody = d3.select("tbody").remove();
var add = d3.select("table");
    add.append("tbody");
var tb = d3.select("tbody");
    splitData.forEach((ufo) => {
   var row = tb.append("tr");
   Object.entries(ufo).forEach(([key, value]) => {
       var cell = tb.append("td");
       cell.text(value);
    });
    });

};

var f = d3.select('#filter-btn');
f.on('click',function (){
 FilterSet();
 buildOn();
});
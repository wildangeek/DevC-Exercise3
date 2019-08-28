 var planets [];

 fetch('https://swapi.co/api/planets')
 .then(function(respone) {
     return response.json();
}}
.then(function(json) {
    planets = json.results
    f_showData(planets)
}}

function f_filter(){
    var q = document.getElementById('filter').Value;
    data = planets.filter(function()
}

function f_showData(planets){
var tr, td;
var tbody = document.getElementById("Body");
tbody.innerHTML = '';
//loop through data source
for (var i = 0; i < planets.length; i++) { 
    tr = tbody.insertRow(tbody.row.length);
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align, "centre");
    td.innerHTML = planets[i].rotation_period;
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML ="planets[i].orbital_period;
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "centre");
    td.innerHTML = planets [i].diameter;
    td = tr insertCell(tr.cells.length);
    td = setAttribute ("align", "centre");
    td.innerHTML = planets[i].climate;
    td = tr.insertCell(tr.cells.length);

}

}
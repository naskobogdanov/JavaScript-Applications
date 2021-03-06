var input = '[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},' +
    '{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},' +
    '{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]';

//Parse input to JSON object
var jsonInput = $.parseJSON(input);

//Function to get the element key - first letter capital
function getElementKeys(i, j) {
    j = j || 0;
    var elementKeys = Object.keys(jsonInput[j]);
    return elementKeys[i][j].toUpperCase() + elementKeys[i].substring(1);
}

//Function to get the element value
function getElementValues(obj) {
    var result = [];
    $.each(obj, function(k, v) {
        result.push(v);
    });
    return result;
}

//Implement the table
var html = '<table><tr>';

//Insert the keys to the th section
for (var i = 0; i < Object.keys(jsonInput[0]).length; i++) {
    html += '<th>' + getElementKeys(i) + '</th>';
}

html += '</tr>';

//Insert the values to the cells
for (var i = 0; i < jsonInput.length; i++) {

    var values = getElementValues(jsonInput[i]);

    html += '<tr>';
    for (var j = 0; j < values.length; j++) {
        html += '<td>' + values[j] + '</td>';
    }
    html += '</tr>';
}

html += '</table>';

$(html).appendTo('#div');
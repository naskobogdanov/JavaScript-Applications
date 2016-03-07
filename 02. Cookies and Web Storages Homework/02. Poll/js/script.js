var radios = document.forms["form"].elements;
var state;
for(radio in radios) {
    radios[radio].onclick = function() {
        //if (radios[radio].checked == "checked") {
        //    radios[radio].style.checked = 'checked';
        //    console.log(radios[radios].value)
        //}
        state = document.getElementById('form').innerHTML;
        //console.log(state);
        localStorage.setItem('state', state);
        document.getElementById('form').innerHTML = localStorage.getItem('state');
        localStorage.setItem(radios[radio].id, radios[radio].value);
    }
}

var submitButton = document.getElementsByTagName('button');
submitButton[0].addEventListener('click', function (e) {
    var output = 'Answers: <br/>' +
        'Q1/ Archie<br/>' +
        'Q2/ 128 bit<br/>' +
        'Q3/ WorldWideWeb<br/>' +
        'Q4/ Creeper Virus<br/>' +
        'Q5/ Security';
    document.getElementById('output').innerHTML = output;
    delay = 1000000;
});
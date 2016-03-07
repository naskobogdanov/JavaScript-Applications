function countriesLoaded(data) {
    $( "#countriesList" ).append('<ul>');
    for (var c in data) {
        var country = data[c];
        $( "#countriesList" ).append('<li>' + country.name + '</li>');

        console.log(country.name);
    }
    $( "#countriesList" ).append('</ul>');
}

function ajaxError() {
    console.log('Cannot load AJAX data');
}

$.ajax({
    method: 'GET',
    headers: {
        'Authorization' : 'Basic bmFza286MTIzNA==',
        'X-Kinvey-API-Version' : '3'
    },
    contentType: 'application/json',

    url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Country',
    error: ajaxError,
    success: countriesLoaded
});